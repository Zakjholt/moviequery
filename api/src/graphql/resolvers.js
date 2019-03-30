const { getPopularMovies, queryMovies } = require('../db/moviedb')

const resolvers = {
  Query: {
    popularMovies: (ctx, args) => getPopularMovies(args.page),
    queryMovies: (ctx, args) => queryMovies(args.query, args.page)
  }
}

module.exports = resolvers
