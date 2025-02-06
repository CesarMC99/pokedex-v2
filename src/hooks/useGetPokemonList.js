import { useQuery } from "@tanstack/react-query"
import { fetchPokemonsList } from "../helpers/fetchPokemonList"

export const useGetPokemonList = () => {

  const { data: pokemonList, isLoading: isLoadingPokemonList, error: isErrorPokemonList } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemonsList,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })

  return {
    pokemonList,
    isLoadingPokemonList,
    isErrorPokemonList
  };
}

