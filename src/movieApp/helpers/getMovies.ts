

export const getMovies = async() => {

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=3af6b19f6f55f6c2fa7bd2fdb9ca00e0';
    const Response = await fetch(url);
    const {results} = await Response.json();
    return results
    
    
    



}								