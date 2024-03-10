import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../components/Home"
import { Popular } from "../components/Popular"
import { Buscar } from "../components/Buscar"
import { NavBar } from "../nav/NavBar"
import { ContentCategory } from "../components/ContentCategory"
import { ContentDetails } from "../components/ContentDetails"


export const MovieRoutes = () => {

   


    return (	
        <>
        <NavBar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/popular" element={<Popular/>}/>
            <Route path="/home/popular/:id" element={<ContentDetails/>}/>
            <Route path="/buscar" element={<Buscar/>}/>
            <Route path="/home/buscar/:id" element={<ContentDetails/>}/>
            <Route path="/home/:genero" element={<ContentCategory/>}/>
            <Route path="/home/:genero/:id" element={<ContentDetails/>}/>
            
            <Route path="/*" element={<Navigate to={'/home'}/>}/>
       

        </Routes>	
        </>	
    )	
}