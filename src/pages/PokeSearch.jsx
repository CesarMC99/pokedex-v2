import { ListOfPokemons } from "../components/ListOfPokemons";
import { Pagination } from "../components/Pagination";
import { useGetPokemonFilter } from "../hooks/useGetPokemonFilter"

export const PokeSearch = () => {

  const { pokemonFilters, isLoading, isError, currentPage, previousPage, nextPage } = useGetPokemonFilter();

  return (
    <>
      <ListOfPokemons pokemons={pokemonFilters} isLoading={isLoading} isError={isError}/>
      <Pagination currentPage={currentPage} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}