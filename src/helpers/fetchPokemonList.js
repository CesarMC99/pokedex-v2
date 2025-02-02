import { sleep } from "../hooks/sleep";

export const fetchPokemonsList = async () => {
  await sleep(1000)

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000&`);
  if(!response.ok) throw new Error ("Error de fetching");
  return await response.json();
}