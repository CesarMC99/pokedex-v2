import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchPokemonsList } from "../helpers/fetchPokemonList"
import { fetchPokemonDetails } from "../helpers/fetchPokemonDetails";
import { useEffect, useState } from "react";

export const useGetPokemonList = () => {

  // const queryClient = useQueryClient()

  // const [page, setPage] = useState(1);
  // const limit = 9;

  const { data: pokemonList, isLoading: isLoadingPokemonList, error: isErrorPokemonList } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemonsList,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })

  // const pokemonDetailsQueries = useQueries({
  //   queries: pokemonList
  //     ? pokemonList.results.map(pokemon => ({
  //         queryKey: ["pokemonDetails", pokemon.name],
  //         queryFn: () => fetchPokemonDetails(pokemon.name),
  //         staleTime: Infinity,
  //         refetchOnWindowFocus: false,
  //       }))
  //     : []
  // });

  // const preFetchingDataOfNextPage = async () => {
  //   if (pokemonList?.next) {

  //     const nextPage = page + 1;

  //     queryClient.prefetchQuery({
  //       queryKey: ["pokemonList", nextPage, limit],
  //       queryFn: () => fetchPokemonsList(nextPage, limit),
  //       staleTime: Infinity,
  //     });

  //     const nextPageData = await fetchPokemonsList(nextPage, limit)
  //     nextPageData.results.forEach((pokemon) => {
  //       queryClient.prefetchQuery({
  //         queryKey: ["pokemonDetails", pokemon.name],
  //         queryFn: () => fetchPokemonDetails(pokemon.name),
  //         staleTime: Infinity,
  //       });
  //     });
  //   }
  // }
  
  // useEffect(() => {
  //   preFetchingDataOfNextPage()
  // }, [page, pokemonList, queryClient]);

  // const isLoadingDetails = pokemonDetailsQueries.some(query => query.isLoading);
  // const isErrorDetails = pokemonDetailsQueries.some(query => query.isError);
  // const pokemonsDetails = pokemonDetailsQueries.map(query => query.data).filter(Boolean);

  return {
    pokemonList,
    isLoadingPokemonList,
    isErrorPokemonList
    // pokemonsDetails,
    // isLoading: loadingPokemonList || isLoadingDetails,
    // isError: errorPokemonList || isErrorDetails,
    // page,
    // setPage
  };
}

