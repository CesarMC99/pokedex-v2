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
    <form onSubmit={handlerSubmit}>
      <input onChange={onInputChange} name="searchPokemon" value={searchPokemon}/>
      <button>Buscar</button>
    </form>
  )
}