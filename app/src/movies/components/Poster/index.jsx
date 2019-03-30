import React from 'react'
import { getPosterSrc } from 'src/movies/util/images'

/**
 * Props
 * {
 *  poster_path: Movie['poster_path']
 * }
 */

const Poster = ({ poster_path }) => <img src={getPosterSrc(poster_path)} />

export default Poster
