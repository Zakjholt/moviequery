const { gql } = require('apollo-server')

// The GraphQL schema
const schema = gql`
  type Movie {
    id: ID
    popularity: Float
    vote_average: Float
    title: String
    release_date: String
    overview: String
    poster_path: String
  }

  type MovieQueryResponse {
    results: [Movie]
    page: Int
    total_pages: Int
  }

  type Query {
    "Fetch list of popular movies"
    popularMovies(page: Int): MovieQueryResponse

    "Search for movies by query string. Without a query, it returns the popular movies string"
    queryMovies(query: String, page: Int): MovieQueryResponse
  }
`

module.exports = schema
