import { useEffect, useState } from "react";

import { useGetMovies } from "./useGetMovies";

import { Result } from '../../types/movies';

export const useContentCategory = (genre:string | undefined) => {


    const [movies, setMovies] = useState<Result[]>();

    const obtenerResultados = async() => {
        try {
            const result:Result[] = await useGetMovies({ genre }) || [];
            if (result.length) {
              
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

     useEffect(() => {
        obtenerResultados()
     }, []);

     return{
        movies
     }

}								