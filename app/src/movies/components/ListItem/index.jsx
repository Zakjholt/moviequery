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
  <Link to={`/details/${movie.id}`} className="box">
    <h3 className="is-small">{movie.title}</h3>
    <Poster poster_path={movie.poster_path} />
  </Link>
)

export default ListItem
