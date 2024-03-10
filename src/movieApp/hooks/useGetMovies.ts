import { getMoviesGenre } from "../helpers/getMoviesGenre"

interface Props {
    genre?:string
}


export const useGetMovies = async({genre = 'Accion'}:Props) => {
    let result;
    switch (genre) {
        case 'Accion':
            result = await getMoviesGenre({genre:28});
            break;
         
        case 'Aventura':
            result = await getMoviesGenre({genre:12});
    
            break;
        case 'Comedia':
            result = await getMoviesGenre({genre:35});
        
            break;
        case 'Drama':
            result = await getMoviesGenre({genre:18});
            
            break;
        case 'Romance':
            result = await getMoviesGenre({genre:10749});
            break;    
    }
    return result
}								