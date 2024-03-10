import { useEffect, useState } from "react";
import { getMovies } from "../helpers/getMovies";
import { useNavigate } from "react-router-dom";
import { Result } from "../../types/movies";





export const Popular = () => {

    const navigate = useNavigate();

    const [movies, setMovies] = useState<Result[]>();


    
    const obtenerResultados = async() => {
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

     useEffect(() => {
        obtenerResultados()
     }, []);
     

     const DetailsMovies = (id:number) => {
        navigate(`/home/popular/${id}`);
    }


    return (	
        <>
        <h1 className="mt-2 ms-2">Popular</h1>
        <div className="row rows-cols-1 row-cols-md-3 g-3 mt-2 me-2 mb-2 ms-2">
            {
                movies?.map((mov) => (
                    <div className="col animate__animated animate__fadeIn" onClick={() => DetailsMovies(mov.id) }>
                    <div className="card">
                       
                        <div className="text-center">
                            
                            <div className="">
                                {/* <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${mov.poster_path}`} className="card-img" alt={mov.title} /> */}
                                <img src={`https://media.themoviedb.org/t/p/original${mov.poster_path}`} className="card-img" alt={mov.title} />
                            </div>
        
                            <div className="">
        
                                <div className="card-body">
        
                                    <h5 className="card-title">{ mov.title }</h5>
                                    <p className="card-text">{`${mov.release_date}`}</p>        
                                </div>
        
                            </div>
        
        
                        </div>
        
                    </div>
                </div>
                ))
            }


            
        </div>
        
        </>	
    )	
}