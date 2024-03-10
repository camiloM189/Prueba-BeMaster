import { useState, useEffect } from "react";
import { Result } from "../../types/movies";
import { getMovies } from "../helpers/getMovies";
import { getMoviesName } from "../helpers/getMoviesName";

export const useSearchMovie = () => {

    const [movies, setMovies] = useState<Result[]>();

    

    useEffect(() => {
        obtenerMovies()
    }, []);


    const obtenerMovies = async() => {
        try {
            const result = await getMovies() || [];
            if (Array.isArray(result)) {
              
                setMovies(result);
            } else {
                console.error("Error: El resultado obtenido no es un arreglo válido");
                setMovies([]);
            }
        
        } catch (error) {
            console.error("Error al obtener películas:", error);
            setMovies([]);
        }

    }
    
    const searchMovies = async(name:string) => { 
        try {
            const result = await getMoviesName({name}) || [];
            if (Array.isArray(result)) {
              
                setMovies(result);
            } else {
                console.error("Error: El resultado obtenido no es un arreglo válido");
                setMovies([]);
            }
        
        } catch (error) {
            console.error("Error al obtener películas:", error);
            setMovies([]);
        }
    }

return{
    movies,
    searchMovies
}
}								