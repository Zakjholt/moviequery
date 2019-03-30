import gql from 'graphql-tag'

export const QUERY_MOVIES = gql`
  query queryMovies($query: String, $page: Int) {
    queryMovies(query: $query, page: $page) {
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

export const GET_MOVIE_DETAILS = gql`
  query movieDetails($id: ID!) {
    movieDetails(id: $id) {
      title
      id
      poster_path
      vote_average
      release_date
      overview
      homepage
    }
  }
`
