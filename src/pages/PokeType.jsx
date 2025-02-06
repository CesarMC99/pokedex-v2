import { ListOfPokemons } from "../components/ListOfPokemons";
import { Pagination } from "../components/Pagination";
import { useGetPokemonByType } from "../hooks/useGetPokemonByType"

export const PokeType = () => {

  const { pokemonsByTypeDetails, isError, isLoading, currentPage, previousPage, nextPage } = useGetPokemonByType();

  return (
    <>
      <ListOfPokemons pokemons={pokemonsByTypeDetails} isLoading={isLoading} isError={isError}/>
      <Pagination currentPage={currentPage} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}