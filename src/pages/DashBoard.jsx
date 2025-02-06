import { Outlet } from "react-router"
import { SearchForm } from "../components/SearchForm"
import { BarOfTypes } from "../components/BarOfTypes"

export const DashBoard = () => {
  return (
    <>
      <header>CABECERA</header>
      <main>
        <SearchForm />
        <BarOfTypes />
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}