import { useNavigate } from "react-router-dom"

interface Genre {
    genero:string

}


export const Home = () => {

    const navigate = useNavigate();

    const goToTheMovies = ({genero}:Genre) => {
        navigate(`/home/${genero}`);
    }

    return (	
        <>
        <h1 className="text-center mt-2 mb-2">Generos</h1>
           <div className="row rows-cols-1 row-cols-md-3 g-3 mt-2 me-2 mb-2 ms-2 justify-content-center mb-5 animate__animated animate__pulse">
            <div className="col" style={{cursor:"pointer"}} onClick={() => goToTheMovies({genero:'Accion'})}>
                    <div className="card">
                       
                        <div className="text-center">
                            
                            <div className="">
                                <img src="/ActionWallpaper.jpg" alt="Accion" className="img-contenedor-genero"  style={{width:'100%'}}/>
                            </div>
        
                            <div className="">
        
                                <div className="card-body">
        
                                    <h5 className="card-title">Accion</h5>      
                                </div>
        
                            </div>
        
        
                        </div>
        
                    </div>
                </div>
                <div className="col "  style={{cursor:"pointer"}} onClick={() => goToTheMovies({genero:'Aventura'})}>
                    <div className="card">
                       
                        <div className="text-center">
                            
                            <div className="">
                                <img src="/AdventureWallpaper.jpg" alt="Accion" className=" img-contenedor-genero"  style={{width:'100%'}}/>
                            </div>
        
                            <div className="">
        
                                <div className="card-body">
        
                                    <h5 className="card-title">Aventura</h5>      
                                </div>
        
                            </div>
        
        
                        </div>
        
                    </div>
                </div>
                <div className="col"  style={{cursor:"pointer"}} onClick={() => goToTheMovies({genero:'Comedia'})}>
                    <div className="card">
                       
                        <div className="text-center">
                            
                            <div className="">
                                <img src="/ComedyWallpaper.jpg" alt="Accion" className="img-contenedor-genero"  style={{width:'100%'}}/>
                            </div>
        
                            <div className="">
        
                                <div className="card-body">
        
                                    <h5 className="card-title">Comedia</h5>      
                                </div>
        
                            </div>
        
        
                        </div>
        
                    </div>
                </div>
                <div className="col  "  style={{cursor:"pointer"}} onClick={() => goToTheMovies({genero:'Drama'})}>
                    <div className="card">
                       
                        <div className="text-center">
                            
                            <div className="">
                                <img src="/DramaWallpaper.jpg" alt="Accion" className="img-contenedor-genero"  style={{width:'100%'}}/>
                            </div>
        
                            <div className="">
        
                                <div className="card-body">
        
                                    <h5 className="card-title">Drama</h5>      
                                </div>
        
                            </div>
        
        
                        </div>
        
                    </div>
                </div>
                <div className="col"  style={{cursor:"pointer"}} onClick={() => goToTheMovies({genero:'Romance'})}>
                    <div className="card">
                       
                        <div className="text-center">
                            
                            <div className="">
                                <img src="/RomanceWallpaper.jpg" alt="Accion" className="img-contenedor-genero"  style={{width:'100%'}}/>
                            </div>
        
                            <div className="">
        
                                <div className="card-body">
        
                                    <h5 className="card-title">Romance</h5>      
                                </div>
        
                            </div>
        
        
                        </div>
        
                    </div>
                </div>
            </div>
        </>
    )	
}
