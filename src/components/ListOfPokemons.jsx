import { CardOfPokemon } from "./CardOfPokemon";
import { Loader } from "./Loader";

export const ListOfPokemons = ({ pokemons, isLoading, isError}) => {

  if (isLoading) return <Loader tamaño="100vh"/> ;

  if (isError) return <div>Error occurred while fetching users.</div>;

  return (
    <ul className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-3">
        {
          pokemons.map(pokemon => (
            <li key={pokemon.id}>
              <CardOfPokemon pokemon={pokemon} />
            </li>
          ))
        }
    </ul>
  )
}