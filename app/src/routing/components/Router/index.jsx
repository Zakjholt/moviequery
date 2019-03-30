import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MovieSearchPage from 'src/movies/pages/SearchPage'
import MovieDetailsPage from 'src/movies/pages/DetailsPage'
import NotFoundPage from 'src/errors/pages/NotFoundPage'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MovieSearchPage} />
      <Route path="/details/:id" exact component={MovieDetailsPage} />
      <NotFoundPage />
    </Switch>
  </Router>
)

export default AppRouter
