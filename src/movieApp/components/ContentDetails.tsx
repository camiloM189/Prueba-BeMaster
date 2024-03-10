import { useParams } from "react-router-dom";
import { useContentDetails } from "../hooks/useContentDetails";

export const ContentDetails = () => {
   const { id } = useParams();
   const { movies, showModal, toggleModal, trailer,cast } = useContentDetails(id || '');
  

   return (
    <>
      <div className="row me-0 mb-5"  style={{justifyContent: 'center',backgroundPosition: "center" ,backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://media.themoviedb.org/t/p/original${movies?.poster_path})` }}>
      <div className="col-sm-12 col-md-4 d-flex justify-content-center mt-5" style={{alignItems:'center'}}>
        <img src={`https://media.themoviedb.org/t/p/original${movies?.poster_path}`} className="img-fluid mb-5" alt={movies?.title} />
      </div>
    
      <div className="col-md-6 col-sm-12  text-light d-flex justify-content-center flex-column me-5 ms-5 mt-5">
        <h3>{movies?.original_title }</h3>
        <ul className="">
          <li className=""> <b>Fecha: </b>{`${movies?.release_date}`} </li>
          <li className=""> <b>Puntuación de usuarios: </b> { movies?.vote_average} </li>
          <li className=""> <b>Vista general: </b> { movies?.overview } </li>
        </ul>
        <div className="" style={{display:"flex",cursor:'pointer'}} onClick={toggleModal} >
        <i  className="bi bi-play-fill" style={{fontSize:'35px'}}></i>
          <p className="ms-2" style={{fontSize:'35px'}}>Reproducir Trailer</p>
        </div>
     
     
        {
          showModal  &&
          <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
             <div className="contenedor-btn">
               <i className="bi bi-x me-5" style={{cursor:'pointer',fontSize:'35px'}} onClick={toggleModal}></i>
             </div>

             <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailer}`}
                title="Reproductor de Película"
                allowFullScreen

             ></iframe>
          </div>
       </div>
        }
       
      </div>
    </div>
    <h2 className=" text-dark text-center mt-2">Reparto</h2>

    <div className="row rows-cols-1 row-cols-md-5 g-3 mt-2 me-2 mb-2 ms-2">
      
            {
                cast?.map((dis) => (
                    <div className="col animate__animated animate__fadeIn">
                    <div className="card">
                       
                        <div className="text-center">
                            
                            <div className="">
                
                                <img src={`https://media.themoviedb.org/t/p/original${dis.profile_path}`} className="card-img" alt={dis.name} />
                            </div>
        
                            <div className="">
        
                                <div className="card-body">
        
                                    <h5 className="card-title">{ dis.name }</h5>
      
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