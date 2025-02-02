import { Outlet } from "react-router"

export const DashBoard = () => {
  return (
    <>
      <header>CABECERA</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}