import {Link, withRouter} from 'react-router-dom'

import './index.css'

const MovieCard = props => {
  const {movie} = props
  const {id, title, posterPath, voteAverage} = movie
  const imageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`

  return (
    <Link to={`/movie/${id}`} className="restaurant-link">
      <li className="restaurant-card">
        <img src={imageUrl} alt="restaurant" className="restaurant-image" />
        <div className="restaurant-info">
          <h1 className="restaurant-name">{title}</h1>
          <p className="restaurant-cuisine">{voteAverage}</p>
        </div>
      </li>
    </Link>
  )
}

export default withRouter(MovieCard)
