import { sleep } from "../hooks/sleep";

export const fetchPokemonDetails = async (name) => {
  await sleep(1000)
  // console.log(name)
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if(!response.ok) throw new Error ("Error de fetching en encontrar detalles de pokemones");
  const results = await response.json()

  const nameEdit = results.name.charAt(0).toUpperCase() + name.slice(1)

  const img = results.sprites.other.showdown["front_default"];

  const typesIcons = await Promise.all(results.types.map((async (type) => {
    const response = await fetch(type.type.url);
    if(!response.ok) throw new Error ("Error de fetching en encontrar detalles de pokemones");
    const results = await response.json()
    return {["name"]:results.name ,["img"]:results.sprites["generation-viii"]["sword-shield"]["name_icon"]}
  })))

  return {...results,name: nameEdit, sprites: img, types: typesIcons};
}