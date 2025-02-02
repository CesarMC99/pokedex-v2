export const CardOfPokemon = ({ pokemon }) => {

  const {id, name, sprites, types} = pokemon;

  return (
    <article className="flex flex-col items-center gap-6 p-8 w-[350px] bg-zinc-900 rounded-2xl">
      <img className="aspect-auto h-[150px]" src={sprites} alt={name} />
      <p className="text-white text-2xl font-semibold">#{id}</p>
      <h4 className="text-white text-2xl font-semibold">{name}</h4>
      <div className="flex gap-6">
        {
          types.map(type => (
            <img className="w-[120px]" key={type.name} src={type.img} alt={type.name} />
          ))
        }
      </div>
      <button className="px-3 py-1 font-semibold bg-white text-lg rounded-[100px]">+ Mas detalles</button>
    </article>
  )
}