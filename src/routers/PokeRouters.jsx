import { Navigate, Route, Routes } from "react-router"
import { DashBoard } from "../pages/DashBoard"
import { Home } from "../pages/Home"
import { PokeSearch } from "../pages/PokeSearch"
import { PokeType } from "../pages/PokeType"

export const PokeRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        <Route index element={<Navigate to="/home" />}/>
        <Route path="home" element={<Home />}/>
        <Route path="pokemon/:search" element={<PokeSearch />}/>
        <Route path="type/:type" element={<PokeType />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  )
}