import { IResultTrailer, Result } from "../../types/movies";



interface Props{
    id:string
}


export const getMovieForId = async({id}:Props) => {

        const urlMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=3af6b19f6f55f6c2fa7bd2fdb9ca00e0`;
        const urlTrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3af6b19f6f55f6c2fa7bd2fdb9ca00e0`;
        const Response = await fetch(urlMovie);
        const ResponseTrailer = await fetch(urlTrailer);
        const dataTrailer:IResultTrailer = await ResponseTrailer.json();
        const data:Result = await Response.json();
        
        return {data,dataTrailer}
        
    
}								