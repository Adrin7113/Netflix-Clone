import React, {useState, useEffect} from 'react';
import axios from './axios';
import "./Row.css";
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    //snippet which runs on a specific condition
    useEffect(() => {
        //if [], run once when Row loads, dont run again
        //if [movies], it runs every time movies changes
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);

            return request;
        }
        fetchData();
    }, [fetchUrl]);
   
  return (
    <div className="row">
      
        <h2>{title}</h2>

        <div className='row_posters'>

        {movies.map(movie =>(
          <img 
          key={movie.id}
          className = {`row_poster ${isLargeRow && "row_posterLarge"}`}
          src={`${baseUrl}${movie.backdrop_path}`==="https://image.tmdb.org/t/p/original/null" ? `${baseUrl}${movie.poster_path}` : `${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
        ))}
        </div>

    </div>
  );
}

export default Row;
