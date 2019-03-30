import React, { useState, useCallback } from 'react'

import { useQuery } from 'react-apollo-hooks'

import { QUERY_MOVIES } from 'src/movies/graphql/queries'
import MovieListItem from 'src/movies/components/ListItem'
import RequestError from 'src/nonIdealStates/components/RequestError'
import Loading from 'src/nonIdealStates/components/Loading'
import styles from './styles.scss'

/**
 * Props
 * {
 *  query: string;
 * }
 */
const QueryResultsList = ({ query }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const incrementPage = useCallback(() => {
    setCurrentPage(currentPage + 1)
  }, [query, currentPage])

  const decrementPage = useCallback(() => {
    setCurrentPage(currentPage - 1)
  }, [query, currentPage])

  const { data, error, loading } = useQuery(QUERY_MOVIES, {
    variables: { query, page: currentPage }
  })

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <RequestError error={error} />
  }

  const {
    queryMovies: { results, page, total_pages }
  } = data

  return (
    <div className={styles.container}>
      <div className={styles.results}>
        {results.map(m => (
          <MovieListItem movie={m} key={m.id} />
        ))}
      </div>
      <div className={styles.controls}>
        {page > 1 && (
          <div onClick={decrementPage} className={styles.control}>
            <div>[-</div>
            <div>previous page</div>
          </div>
        )}

        {page !== total_pages && (
          <div onClick={incrementPage} className={styles.control}>
            <div>-]</div>
            <div>next page</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QueryResultsList
