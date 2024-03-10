import { IDistribution } from "../../types/cast";

export const getdistribution = async(movieId:string) => {

    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=3af6b19f6f55f6c2fa7bd2fdb9ca00e0`;
    const Response = await fetch(url);
    const result:IDistribution = await Response.json();
    const {cast} = result;
    
    
    return cast



    
}								