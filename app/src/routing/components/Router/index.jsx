import React from 'react'
import { useRoutes } from 'hookrouter'

import MovieSearchPage from '~/movies/pages/SearchPage'
import MovieDetailsPage from '~/movies/pages/DetailsPage'
import NotFoundPage from '~/errors/pages/NotFoundPage'

const routes = {
  '/': MovieSearchPage
  '/details/:id': ({ id }) => <MovieDetailsPage id={id} />
}

const Router = () => {
  const routeResult = useRoutes(routes)

  return routeResult || <NotFoundPage />
}

export default Router
