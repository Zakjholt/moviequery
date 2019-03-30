import React from 'react'
import { Link } from 'react-router-dom'

import Poster from 'src/movies/components/Poster'

/**
 * Props
 * {
 *  movie: Movie
 * }
 */

const ListItem = ({ movie }) => (
  <Link to={`/details/${movie.id}`} className="box tile is-4">
    <div>{movie.title}</div>
    <Poster poster_path={movie.poster_path} />
  </Link>
)

export default ListItem
