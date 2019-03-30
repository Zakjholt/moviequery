import gql from 'graphql-tag'

export const QUERY_MOVIES = gql`
  query queryMovies($query: String) {
    queryMovies(query: $query) {
      results {
        title
        id
        poster_path
      }
      page
      total_pages
    }
  }
`
