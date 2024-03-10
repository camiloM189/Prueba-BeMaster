import { useEffect, useState } from "react";
import { getMoviesName } from "../helpers/getMoviesName";
import { useForm } from "../hooks/useForm"
import { getMovies } from "../helpers/getMovies";
import { useNavigate } from "react-router-dom";

const formData = {
    name: '',

  }

  interface IResult {
    adult:boolean
    backdrop_path:string
    genre_ids: []
    id: number
    original_language: string
    original_title: string
    overview:string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}




export const Buscar = () => {
    
    const {formState,onInputChange} = useForm(formData);
    const [movies, setMovies] = useState<IResult[]>();
    const navigate = useNavigate();

    const {name} = formState;

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

    const onSubmit = async(event:React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
    

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

    const DetailsMovies = (id:number) => {
        navigate(`/home/buscar/${id}`);
    }


    return (	
        <>
        <h1 className="mt-2 ms-2">Buscar</h1>
       
        <div className="row rows-cols-1 row-cols-md-3 g-3 mt-2 me-2 mb-2 ms-2">
      
         <form onSubmit={(event) => onSubmit(event)} action="" className="input-group"> 
            <input type="text" className="form-control" 
              placeholder="Buscar Peliculas"
              aria-label="Recipient's username" 
              aria-describedby="basic-addon2"
              value={name}
              onChange={onInputChange}
              name="name"
             />
            <button type="button" className="btn btn-primary input-group-text ">Buscar</button>
         </form>
    
            {
                movies?.map((mov) => (
                    <div className="col animate__animated animate__fadeIn" style={{cursor:'pointer'}} onClick={() => DetailsMovies(mov.id) }>
                    <div className="card">
                       
                        <div className="text-center">
                            
                            <div className="">
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