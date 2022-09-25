import React, {useState, useEffect} from 'react';
import axios from './axios';
import "./Row.css";
// import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer";
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    // const [trailerUrl, setTrailerUrl] = useState("");

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
    
    // const opts = {
    //   height: "390",
    //   width: "100%",
    //   playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 1,
    //   },
    // }

//     const handleClick = (movie) => {
//         if (trailerUrl)
//         {
//           setTrailerUrl("");
//         }
//         else {
//           movieTrailer(null ,{ tmdbId: movie.id })
//                    .then((url)=>{
//                      console.log("url is "+url);
//                      const urlParams=new URLSearchParams(new URL(url).search);
//                      console.log("urlParamsn"+urlParams);
//                      setTrailerUrl(urlParams.get("v"));
//                    })
//                    .catch((error)=> console.log(error));
//     }
//  };


  return (
    <div className="row">
      
        <h2>{title}</h2>

        <div className='row_posters'>

        {movies.map(movie =>(
          <img 
          key={movie.id}
          // onClick={() => handleClick(movie)}
          className = {`row_poster ${isLargeRow && "row_posterLarge"}`}
          src={`${baseUrl}${movie.backdrop_path}`==="https://image.tmdb.org/t/p/original/null" ? `${baseUrl}${movie.poster_path}` : `${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
        ))}
        </div>
          {/* {trailerUrl && <Youtube videoId={'trailerUrl'} opts={opts} />} */}
    </div>
  );
}

export default Row;
