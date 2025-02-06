export const fetchTypesList = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/type?limit=50");
  if(!response.ok) throw new Error ("Error al optener la lista de tipos");
  return response.json()
}