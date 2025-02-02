import { useGetPokemonList } from "../hooks/useGetPokemonList";
import { useGetInfinityPokemonList } from "./useGetInfinityPokemonList"
import { CardOfPokemon } from "./CardOfPokemon";
import { useEffect, useRef } from "react";

export const ListOfPokemons = () => {

  // const  { pokemonList, pokemonsDetails, isLoading, isError, page, setPage }  = useGetPokemonList();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, isLoading } = useGetInfinityPokemonList()

  // console.log(isFetchingNextPage)

  useEffect(() => {
    const handleScroll = () => {
      
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;  

      // console.log(isFetchingNextPage)

      if (scrollPosition >= documentHeight - 1 && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [hasNextPage]);

  // if (isLoading) return <div>Loading...</div> ;

  // if (isError) return <div>Error occurred while fetching users.</div>;

  return (
    <div>
        {/* {
          data?.results.map(pokemon => (
            <CardOfPokemon key={pokemon.id} pokemon={pokemon}  />
          ))
        }

        <button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <p>{page}</p>
        <button onClick={() => setPage((old) => old + 1)} disabled={!pokemonList.next}>
          Next
        </button> */}


      <div>
        <h1 className="h-screen">Pokémon Infinite Scroll</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          {data?.pages.flatMap((page) =>
            page.data.results.map((pokemon) => (
              <div key={pokemon.name} style={{ border: "1px solid black", padding: "10px", textAlign: "center" }}>
                {pokemon.name.toUpperCase()}
              </div>
            ))
          )}
        </div>

        {isFetchingNextPage && <p style={{ textAlign: "center", marginTop: "10px" }}>Cargando más Pokémon...</p>}
      </div>
    </div>
  )
}