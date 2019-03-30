const axios = require('axios')

const { MOVIE_DB_KEY } = require('../conf')

const movieDbAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
  params: {
    api_key: MOVIE_DB_KEY
  }
})

const getPopularMovies = async (page = 1) => {
  try {
    const { data } = await movieDbAxios(
      '/discover/movie?sort_by=popularity.desc',
      { params: { page } }
    )

    return data
  } catch (err) {
    console.log(err.message)

    return []
  }
}

const queryMovies = async (query, page = 1) => {
  // If the don't search for anything, just send the popular movies list
  if (!query) {
    return getPopularMovies(page)
  }

  try {
    const { data } = await movieDbAxios('/search/movie', {
      params: { query, page }
    })

    return data
  } catch (err) {
    console.log(err.message)

    return []
  }
}

module.exports = { getPopularMovies, queryMovies }
