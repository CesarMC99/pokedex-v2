import { sleep } from "../hooks/sleep";

export const fetchInfinityPokemonList = async ({pageParam = 0}) => {
  // console.log(pageParam)
  await sleep(1500)
  const limit = 9;
  const offset = pageParam

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  if(!response.ok) throw new Error ("Error de fetching");
  const results = await response.json();
  return {
    data: results,
    hasNextPage: results.next !== null,
    nextOffset : offset + limit
  }
}