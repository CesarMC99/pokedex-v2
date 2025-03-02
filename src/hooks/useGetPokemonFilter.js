import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { useGetPokemonList } from "./useGetPokemonList"
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { fetchPokemonDetails } from "../helpers";

export const useGetPokemonFilter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { search } = useParams();
  const queryClient = useQueryClient();
  const limit = 9;

  const { pokemonList, isLoading: isLoadingPokemonList, isError: isErrorPokemonList } = useGetPokemonList();

  // Filtrar URLs de Pokémon según el nombre
  const filtersURLS = useMemo(() => {
    return search && isNaN(search)
      ? pokemonList?.results.filter((pokemon) => pokemon.name.includes(search))
      : null;
  }, [search, pokemonList]);

  const maxPages = filtersURLS ? Math.ceil(filtersURLS.length / limit) : 1;

  // 1. Obtener datos por ID (cuando el search es un número)
  const {
    data: pokemonById,
    isLoading: isLoadingById,
    isError: isErrorById,
  } = useQuery({
    queryKey: ["pokemon", search],
    queryFn: () => fetchPokemonDetails(search),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: !isNaN(search), // Solo habilitar si es un ID
  });

  // 2. Obtener datos por nombre (cuando el search es texto)
  const pokemonsFiltersQueries = useQueries({
    queries:
      filtersURLS?.slice(currentPage * limit - limit, currentPage * limit).map((pokemon) => ({
        queryKey: ["pokemonDetails", pokemon.name],
        queryFn: () => fetchPokemonDetails(pokemon.name),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
      })) || [],
  });

  const pokemonFilters = pokemonsFiltersQueries.map((query) => query.data).filter(Boolean);
  const isLoadingFilters = pokemonsFiltersQueries.some((query) => query.isLoading);
  const isErrorFilters = pokemonsFiltersQueries.some((query) => query.isError);

  // Prefetch de la siguiente página
  useEffect(() => {
    if (filtersURLS && currentPage < maxPages) {
      filtersURLS
        .slice(currentPage * limit, (currentPage + 1) * limit)
        .forEach((pokemon) => {
          queryClient.prefetchQuery({
            queryKey: ["pokemonDetails", pokemon.name],
            queryFn: () => fetchPokemonDetails(pokemon.name),
            staleTime: Infinity,
          });
        });
    }
  }, [currentPage, filtersURLS, queryClient]);

  // Resetear la página al cambiar el search
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return {
    pokemonFilters: isNaN(search) ? pokemonFilters : [pokemonById, ...pokemonFilters],
    isLoading: isLoadingPokemonList || isLoadingFilters || isLoadingById,
    isError: isErrorPokemonList || isErrorFilters || isErrorById,
    currentPage,
    previousPage: () => setCurrentPage((prev) => Math.max(1, prev - 1)),
    nextPage: () => setCurrentPage((prev) => (prev < maxPages ? prev + 1 : prev)),
  };
};