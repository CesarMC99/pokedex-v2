import { Outlet } from "react-router"
import { SearchForm } from "../components/SearchForm"
import { BarOfTypes } from "../components/BarOfTypes"
import { MoreDetailsPokemon } from "../components/MoreDetailsPokemon"

export const DashBoard = () => {
  return (
    <>
      <header className="bg-zinc-900">
        <div 
          className="relative h-screen bg-cover bg-center border-white border-b-4 rounded-b-[30%]"
          style={{backgroundImage: `url('https://i.pinimg.com/736x/69/26/f4/6926f4a4493a9491d91e38692ceea4c5.jpg')`}}
        >
          <img 
            className="absolute  top-5 left-1/2 transform -translate-x-1/2 aspect-auto w-[70%] "
            src="../../img/pokemon-logo.png" alt="logo-pokemon" 
          />
        </div>
      </header>
      <main className="flex flex-col items-center gap-10 p-10 bg-zinc-900">
        <SearchForm />
        <BarOfTypes />
        <Outlet />
        <MoreDetailsPokemon />
      </main>
      <footer className="bg-black text-white font-semibold text-xl grid place-items-center p-6">Hecho por César M.C.</footer>
    </>
  )
}