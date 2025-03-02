import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm"

export const SearchForm = () => {

  const navigate = useNavigate()

  const { searchPokemon, onInputChange, onResetForm } = useForm({
    searchPokemon: ""
  });

  const handlerSubmit = (event) => {
    event.preventDefault();
    onResetForm();
    navigate(`/pokemon/${searchPokemon}`)
  }

  return (
    <form 
      className="flex"
      onSubmit={handlerSubmit}
    >
      <input 
        className="bg-cyan-900 w-[350px] text-white font-semibold px-4 py-2 outline-0 border-3 border-r-0 rounded-tl-2xl rounded-bl-2xl"
        onChange={onInputChange} 
        name="searchPokemon" 
        value={searchPokemon}
      />
      <button className="px-3 py-1 bg-purple-600 text-white font-semibold border-3 border-l-0 rounded-tr-2xl rounded-br-2xl cursor-pointer">Buscar</button>
    </form>
  )
}