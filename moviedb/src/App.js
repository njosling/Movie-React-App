import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const featuredAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5a2f9ffba4f5565d821d2290fdfd3677&language=en-US&query=joker&page=1";

const searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=5a2f9ffba4f5565d821d2290fdfd3677&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(featuredAPI);
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(searchAPI+searchTerm)

      setSearchTerm('');
    };
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
   <>
    <header>
      <form onSubmit={handleOnSubmit}>
      <input 
        className="search" 
        type="search" 
        placeholder="Search.."
        value={searchTerm}
        onChange={handleOnChange}/>
        
      </form>
    </header>
      <div className="movie-container"> 
        {movies.length > 0 && 
          movies.map((movie) => <Movie key={movie.id}
          {...movie} /> )}
      </div>
   </>
  
  );

}

export default App;
