import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Poster from 'src/movies/components/Poster'
import styles from './styles.scss'

/**
 * Props
 * {
 *  movie: Movie
 * }
 */

const ListItem = ({ movie }) => (
  <Link
    to={`/details/${movie.id}`}
    className={classnames('box', styles.container)}
  >
    <h3 className="is-small">{movie.title}</h3>
    <Poster poster_path={movie.poster_path} />
  </Link>
)

export default ListItem
