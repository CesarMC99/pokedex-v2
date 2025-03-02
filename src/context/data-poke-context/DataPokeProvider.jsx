import { useState } from "react"
import { DataPokeContext } from "./DataPokeContext"

export const DataPokeProvider = ({children}) => {

    const [detailsPokemon, setDetailsPokemon] = useState({
        data: null,
        isDisplay: "none",
    })


    return (
        <DataPokeContext.Provider value = {{detailsPokemon, setDetailsPokemon}}>
            {children}
        </DataPokeContext.Provider>
    )
}