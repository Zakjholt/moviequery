const {
  getPopularMovies,
  queryMovies,
  getMovieDetails
} = require('../db/moviedb')

const resolvers = {
  Query: {
    popularMovies: (ctx, args) => getPopularMovies(args.page),
    queryMovies: (ctx, args) => queryMovies(args.query, args.page),
    movieDetails: (ctx, args) => getMovieDetails(args.id)
  }
}

module.exports = resolvers
