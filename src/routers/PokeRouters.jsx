import { Navigate, Route, Routes } from "react-router"
import { DashBoard } from "../pages/DashBoard"
import { Home } from "../pages/Home"

export const PokeRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        <Route index element={<Navigate to="/home" />}/>
        <Route path="home" element={<Home />}/>
      </Route>
    </Routes>
  )
}