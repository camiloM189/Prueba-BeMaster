import { useNavigate, useParams } from "react-router-dom";
import { useContentCategory } from "../hooks/useContentCategory";





export const ContentCategory = () => {

    const {genero} = useParams();

    const navigate = useNavigate();
    
    const {movies} = useContentCategory(genero)
     

     
    const DetailsMovies = (id:number) => {
        navigate(`/home/${genero}/${id}`);
    }

     

    return (
        <>
        <h1 className="mt-2 ms-5 ">{genero}</h1>
        <div className="row rows-cols-1 row-cols-md-3 g-3 mt-2 me-2 mb-2 ms-2">
            {
                movies?.map((mov) => (
                    <div className="col  " onClick={() => DetailsMovies(mov.id) }>
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