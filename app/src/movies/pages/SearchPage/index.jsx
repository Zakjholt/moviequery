import React, { useState, useCallback, useRef } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { debounce } from 'lodash'

import { QUERY_MOVIES } from 'src/movies/graphql/queries'
import MovieQueryResultsList from 'src/movies/components/QueryResultsList'

const useDebouncedQueryRef = () => {
  /*
   * Here, i'm using a ref and not two way binding the input
   * This allows the user to type in the input freely, and still have a debounced search
   */
  const inputRef = useRef()
  const [query, setQuery] = useState('')
  const onQueryChange = useCallback(() =>
    setQuery(!!inputRef.current && inputRef.current.value)
  )
  const debouncedHandler = debounce(onQueryChange, 500)

  return [inputRef, query, debouncedHandler]
}

const SearchPage = () => {
  const [inputRef, query, debouncedHandler] = useDebouncedQueryRef()

  return (
    <div className="container">
      <input
        ref={inputRef}
        onChange={debouncedHandler}
        placeholder="Search movies"
      />
      <MovieQueryResultsList query={query} />
    </div>
  )
}

export default SearchPage
