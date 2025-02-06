import { useParams } from "react-router"
import { useGetTypesListDetails } from "./useGetTytpesListDetails"
import { useQueries, useQueryClient } from "@tanstack/react-query";
import { fetchPokemonDetails } from "../helpers";
import { useEffect, useState } from "react";

export const useGetPokemonByType = () => {

  const { type } = useParams()
  const { typesDetails, isLoadingTypesList, isErrorTypesList } = useGetTypesListDetails();

  const queryClient = useQueryClient();

  const [currentPage, setCurrentPage] = useState(1);

  const pokemonsByType = typesDetails?.filter(pokeType => pokeType.name === type);

  const limit = 9;
  const maxPages = Math.ceil(pokemonsByType[0]?.pokemon.length / limit);

  const pokemonsByTypeQueries = useQueries({
    queries: pokemonsByType.length > 0
    ? pokemonsByType[0].pokemon.slice(currentPage*limit-limit, currentPage*limit).map(poke => ({
      queryKey: ["pokemonDetails", poke.pokemon.name],
      queryFn: () => fetchPokemonDetails(poke.pokemon.name),
      staleTime: Infinity,
      refetchOnWindowsFocus: false,
    })) : []
  });

  const pokemonsByTypeDetails = pokemonsByTypeQueries.map(query => query.data).filter(Boolean);
  const isLoadingTypeDetails = pokemonsByTypeQueries.some(query => query.isLoading);
  const isErrorTypeDetails = pokemonsByTypeQueries.some(query => query.isError);

  const previousPage = () => {
    if(currentPage === 1) return;
    setCurrentPage(prevPage => prevPage - 1);
  }

  const nextPage = () => {
    if(currentPage === maxPages) return;
    setCurrentPage(prevPage => prevPage + 1);
  }

  const preFetchingDataOfNextPage = async () => {

    pokemonsByType[0]?.pokemon.slice((currentPage + 1)*limit-limit, (currentPage + 1)*limit)
      .forEach(poke => {
        queryClient.prefetchQuery({
          queryKey: ["pokemonDetails", poke.pokemon.name],
          queryFn: () => fetchPokemonDetails(poke.pokemon.name),
          staleTime: Infinity,
          refetchOnWindowFocus: false
        });
      });
  }

  useEffect(() => {
    preFetchingDataOfNextPage();
  }, [currentPage, pokemonsByType, queryClient]);

  useEffect(() => {
      setCurrentPage(1);
  }, [type]);

  return {
    pokemonsByTypeDetails,
    isLoading: isLoadingTypesList || isLoadingTypeDetails,
    isError: isErrorTypesList || isErrorTypeDetails,
    currentPage,
    previousPage,
    nextPage
  }
}