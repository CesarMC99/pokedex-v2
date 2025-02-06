import { ListOfPokemons } from "../components/ListOfPokemons"
import { Pagination } from "../components/Pagination";
import { useGetpokemonDetails } from "../hooks";

export const Home = () => {

  const { pokemonsDetails, isLoading, isError, currentPage, previousPage, nextPage } = useGetpokemonDetails();

  return (
    <>
      <ListOfPokemons pokemons={pokemonsDetails} isLoading={isLoading} isError={isError}/>
      <Pagination currentPage={currentPage} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}