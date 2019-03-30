import React from 'react'
import { withRouter } from 'react-router-dom'
import { useQuery } from 'react-apollo-hooks'
import classnames from 'classnames'

import RequestError from 'src/nonIdealStates/components/RequestError'
import Loading from 'src/nonIdealStates/components/Loading'
import Poster from 'src/movies/components/Poster'
import { GET_MOVIE_DETAILS } from 'src/movies/graphql/queries'
import styles from './styles.scss'

/**
 * Props
 * {
 *  match {
 *    params: {
 *     id: Movie['id']
 *    }
 *  }
 * }
 */
const DetailsPage = ({ match: { params } }) => {
  const { loading, error, data } = useQuery(GET_MOVIE_DETAILS, {
    variables: { id: params.id }
  })
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <RequestError error={error} />
  }

  const { movieDetails } = data

  return (
    <div className={classnames('content section', styles.container)}>
      <h2 className={styles.title}>{movieDetails.title}</h2>
      <div className={styles.details}>
        <p>{movieDetails.overview}</p>
      </div>
      <div className={classnames('box', styles.metadata)}>
        <Poster poster_path={movieDetails.poster_path} />
        <div>Average rating {movieDetails.vote_average}</div>
        <div>Released {movieDetails.release_date}</div>
        <a href={movieDetails.homepage}>{movieDetails.homepage}</a>
      </div>
    </div>
  )
}

export default withRouter(DetailsPage)
