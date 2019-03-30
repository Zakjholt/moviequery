import React from 'react'

import { useQuery } from 'react-apollo-hooks'

import { QUERY_MOVIES } from 'src/movies/graphql/queries'
import MovieListItem from 'src/movies/components/ListItem'
import styles from './styles.scss'

/**
 * Props
 * {
 *  query: string;
 * }
 */
const QueryResultsList = ({ query }) => {
  const { data, error, loading } = useQuery(QUERY_MOVIES, {
    variables: { query }
  })
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  const {
    queryMovies: { results, page, total_pages }
  } = data

  return (
    <div className={styles.container}>
      {results.map(m => (
        <MovieListItem movie={m} key={m.id} />
      ))}
    </div>
  )
}

export default QueryResultsList
