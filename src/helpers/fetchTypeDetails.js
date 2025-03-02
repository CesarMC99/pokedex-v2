import { sleep } from "../hooks/sleep";

export const fetchTypeDetails = async (nameType) => {
  // await sleep(1000)

  const response = await fetch(`https://pokeapi.co/api/v2/type/${nameType}`);
  if(!response.ok) throw new Error ("Error de fetching en encontrar detalles de pokemones");
  const results = await response.json();

  const img = results.sprites["generation-vii"]["lets-go-pikachu-lets-go-eevee"]["name_icon"]

  return {...results, sprites: img};
}