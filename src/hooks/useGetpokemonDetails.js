import { useQueries, useQueryClient } from "@tanstack/react-query"
import { useGetPokemonList } from "./useGetPokemonList"
import { useEffect, useState } from "react";
import { fetchPokemonDetails } from "../helpers";

export const useGetpokemonDetails = () => {

  const queryClient = useQueryClient();

  const [currentPage, setCurrentPage] = useState(1);
  const {pokemonList, isLoadingPokemonList, isErrorPokemonList} = useGetPokemonList();

  const limit = 9;
  const maxPages = Math.ceil(pokemonList?.results.length / 9);

  const pokemonDetailsQueries = useQueries({
    queries: pokemonList
    ? pokemonList.results.slice(currentPage*limit-limit, currentPage*limit).map(pokemon => ({
      queryKey: ["pokemonDetails", pokemon.name],
      queryFn: () => fetchPokemonDetails(pokemon.name),
      staleTime: Infinity,
      refetchOnWindowFocus: false
    }))
    : []
  });

  const pokemonsDetails = pokemonDetailsQueries.map(query => query.data).filter(Boolean);
  const isLoadingDetails = pokemonDetailsQueries.some(query => query.isLoading);
  const isErrorDetails = pokemonDetailsQueries.some(query => query.isError);

  const previousPage = () => {
    if(currentPage === 1) return;
    setCurrentPage(prevPage => prevPage - 1);
  }

  const nextPage = () => {
    if(currentPage === maxPages) return;
    setCurrentPage(prevPage => prevPage + 1);
  }

  const preFetchingDataOfNextPage = async () => {

    pokemonList?.results.slice((currentPage + 1)*limit-limit, (currentPage + 1)*limit)
      .forEach(pokemon => {
        queryClient.prefetchQuery({
          queryKey: ["pokemonDetails", pokemon.name],
          queryFn: () => fetchPokemonDetails(pokemon.name),
          staleTime: Infinity,
          refetchOnWindowFocus: false
        });
      });
  }

  useEffect(() => {
    preFetchingDataOfNextPage();
  }, [currentPage, pokemonList, queryClient]);


  return {
    pokemonsDetails,
    isLoading : isLoadingPokemonList || isLoadingDetails,
    isError : isErrorPokemonList || isErrorDetails,
    currentPage,
    previousPage,
    nextPage
  }
}