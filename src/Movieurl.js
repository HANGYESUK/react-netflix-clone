const API_KEY = "1234"; //API키는 숫자로 대체합니다. 

const urls = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ko`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=ko&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=ko`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&language=ko&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&language=ko&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&language=ko&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&language=ko&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&language=ko&with_genres=99`
}

export default urls;
