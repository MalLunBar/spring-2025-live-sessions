import './Card.css'
import { Link } from 'react-router'

const Card = ({ movie }) => {
  console.log(movie)

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="card"><p>{movie.title}</p></div>
    </Link>
  )
}

export default Card