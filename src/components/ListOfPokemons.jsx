import { CardOfPokemon } from "./CardOfPokemon";

export const ListOfPokemons = ({ pokemons, isLoading, isError}) => {

  if (isLoading) return <div>Loading...</div> ;

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