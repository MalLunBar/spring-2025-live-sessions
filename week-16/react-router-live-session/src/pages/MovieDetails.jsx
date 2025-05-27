import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})

  // Do not expose the API key but add it to an env file instead.
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  // https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data)) // save the movie details to the state variable
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [])


  return (
    <div>
      <h2>
        MovieDetails for {movieDetails.title}
      </h2>


      <Link to={"/"}>Back to Movies</Link>
    </div>
  )
}

export default MovieDetails