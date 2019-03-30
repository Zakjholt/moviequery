import React from 'react'
import { useRoutes } from 'hookrouter'

import MovieSearchPage from 'src/movies/pages/SearchPage'
import MovieDetailsPage from 'src/movies/pages/DetailsPage'
import NotFoundPage from 'src/errors/pages/NotFoundPage'

const routes = {
  '/': MovieSearchPage,
  '/details/:id': ({ id }) => <MovieDetailsPage id={id} />
}

const Router = () => {
  const routeResult = useRoutes(routes)

  return routeResult || <NotFoundPage />
}

export default Router
