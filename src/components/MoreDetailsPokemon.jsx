import { useContext } from "react"
import { DataPokeContext } from "../context/data-poke-context/DataPokeContext"
import { GiWeight } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";

export const MoreDetailsPokemon = () => {

    const { detailsPokemon, setDetailsPokemon } = useContext(DataPokeContext);

    const { data, isDisplay } = detailsPokemon

    const closeDetailsPokemon = () => {
        setDetailsPokemon({data: null, isDisplay: "none"})
    }
    
    return (
        <div 
            className="fixed top-0 flex place-content-center place-items-center bg-[rgba(0,0,0,0.5)] backdrop-blur-[5px] backdrop-saturate-200 w-screen h-screen"
            style={{display: `${isDisplay}`}}
        >
            <article className="bg-black w-[75%] h-[70%] p-10 px-20 border-2 rounded-xl">
                <div className="flex items-center gap-14 h-full">
                    <img className="aspect-auto h-[250px]" src={data?.sprites} alt={data?.name} />
                    <div className="flex flex-col items-center justify-between gap-4 w-full h-full">
                        <div className="flex gap-2">
                            <span className="text-white text-3xl font-bold">#{data?.id}</span>
                            <h2 className="text-white text-3xl font-bold">{data?.name}</h2>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="flex gap-2">
                                <GiBodyHeight className="text-lime-400 text-3xl"/>
                                <p className="text-white text-2xl font-semibold">{data?.height/10} m</p>
                            </div>
                            <div className="flex gap-2">
                                <GiWeight className="text-lime-400 text-3xl"/>
                                <p className="text-white text-2xl font-semibold">{data?.weight/10} kg</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start gap-2 w-[90%]">
                            <h3 className="text-white text-center">STATS</h3>
                            <ul className="grid gap-2">
                                {
                                    data?.stats.map(stat => (
                                        <li 
                                            key={stat.stat.name}
                                            className="flex justify-between items-center"
                                        >
                                            <p className="text-white w-[22%]">{stat.stat.name.toUpperCase()}:</p>
                                            <div className="flex items-center w-[55%]">
                                                <div className={`bg-blue-500 h-[10px] transition-all`} 
                                                    style={{width: `${stat["base_stat"]}%`}}
                                                />
                                            </div>
                                            <p className="text-white text-end w-[6%]">{stat["base_stat"]}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <ul className="flex gap-4">
                            {
                                data?.types.map((type, index) => (
                                    <li key={index}>
                                        <img className="border-2 border-white rounded-lg h-[30px]" src={type.img} alt={type.name} />
                                    </li>
                                ))
                            }
                        </ul>
                        <button className="bg-purple-600 text-white p-2 px-10 border-2 rounded-lg cursor-pointer" onClick={closeDetailsPokemon}>Cerrar</button>
                    </div>
                </div>
            </article>
        </div>
    )
}