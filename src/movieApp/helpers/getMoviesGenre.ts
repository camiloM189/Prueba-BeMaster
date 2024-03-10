import { Result } from '../../types/movies';

interface Props{
    genre:number
}

export const getMoviesGenre = async({genre}:Props) => {

    
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=3af6b19f6f55f6c2fa7bd2fdb9ca00e0&with_genres=${genre}`;


    const response = await fetch(url);
    const { results }: { results: Result[] } = await response.json();

    
    return results 

    


}								