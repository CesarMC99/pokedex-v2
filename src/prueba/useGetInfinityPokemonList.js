import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query"
import { fetchInfinityPokemonList } from "./fetchInfinityPokemonList"
import { useEffect } from "react";


export const useGetInfinityPokemonList = () => {

  const queryClient = useQueryClient();

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["pokemonList", ],
    queryFn: fetchInfinityPokemonList,
    getNextPageParam: (lastPage) => {
      console.log("pageParam -->", lastPage)
      return lastPage.hasNextPage ? lastPage.nextOffset : undefined; // Devuelve `undefined` si no hay más páginas
    },
    staleTime: Infinity, // Datos frescos indefinidamente
    refetchOnWindowFocus: false, // Evita refetch al cambiar de ventana
  });

  useEffect(() => {
    if (hasNextPage) {
      let key;
      if(data.pageParams[data.pageParams.length-1]) {
        key = data.pageParams[data.pageParams.length-1];
      } else {
        key = 1;
      }
      console.log("hola", key)
      queryClient.prefetchInfiniteQuery({
        queryKey: ["pokemonList", key],
        queryFn: fetchInfinityPokemonList,
        getNextPageParam: (lastPage) => lastPage.nextOffset + 9
      });
    }
  }, [hasNextPage, data, queryClient]);

  return {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  };
}

