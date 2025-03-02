import { useContext } from "react";
import { DataPokeContext } from "../context/data-poke-context/DataPokeContext";

export const CardOfPokemon = ({ pokemon }) => {

  const {setDetailsPokemon} = useContext(DataPokeContext);
  const {id, name, sprites, types} = pokemon;

  const showDetailsPokemon = () => {
    setDetailsPokemon({data: { ...pokemon }, isDisplay: "block"})
  }

  return (
    <article 
      className="flex flex-col items-center gap-6 p-8 w-[350px] bg-zinc-900 rounded-2xl bg-center border-3 border-white"
      style = {{backgroundImage: `url('https://i.pinimg.com/736x/e5/d1/93/e5d19363513d6e7b159dc210712655e3.jpg')`}}  
    >
      <img className="aspect-auto h-[150px]" src={sprites} alt={name} />
      <p className="text-white text-2xl font-semibold">#{id}</p>
      <h4 className="text-white text-2xl font-semibold text-center">{name}</h4>
      <div className="flex gap-6">
        {
          types.map(type => (
            <img className="w-[120px] border-3 border-white rounded-2xl" key={type.name} src={type.img} alt={type.name} />
          ))
        }
      </div>
      <button className="px-3 py-1 font-semibold bg-purple-600 text-lg text-white rounded-[100px] border-3 border-white cursor-pointer" onClick={showDetailsPokemon}>+ Mas detalles</button>
    </article>
  )
}