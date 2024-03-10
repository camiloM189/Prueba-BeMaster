import { useState, useEffect } from "react";
import { Result } from "../../types/movies";
import { getMovieForId } from "../helpers/getMovieForId";
import { getdistribution } from "../helpers/getdistribution";
import { ICast } from "../../types/cast";

export const useContentDetails = (id:string) => {

    const [movies, setMovies] = useState<Result | null >(null);
    const [trailer, setTrailer] = useState<string>();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [cast, setCast] = useState<ICast[]>([]);

    const obtenerResultados = async() => {
        try {
            if (!!id) {
                const {data,dataTrailer} = await getMovieForId({ id });
                setMovies(data);
                
                const trailerId = dataTrailer.results.filter(({name}) => name.includes('Trailer'));
                if(trailer?.length === 0){
                    return console.error("Error: El ID de la película no está definido");
                }
                setTrailer(trailerId[0].key)
            } else {
                console.error("Error: El ID de la película no está definido");
            }
        } catch (error) {
            console.error("Error al obtener la película:", error);
        }

        
    }
    
    const obtenerDistribution = async() => {
        try {
            if (!!id) {
               const distribution = await getdistribution(id)
                setCast(distribution)
   
                

            }else {
                console.error("Error: El ID de la película no está definido");
            }
            
        } catch (error) {
            console.error("Error al obtener la película:", error);
        }
    }

      useEffect(() => {
         obtenerResultados();
         obtenerDistribution()
      }, [id]);
      
      const toggleModal = () => {
        setShowModal(!showModal);
    };
      
    return{
        showModal,
        movies,
        trailer,
        cast,


        toggleModal
    }

}								