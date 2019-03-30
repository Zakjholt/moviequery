import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo-hooks'
import 'bulma'

import Router from 'src/routing/components/Router'
import ApolloClient from 'src/movies/graphql/client'

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <Router />
  </ApolloProvider>
)

const container = document.getElementById('app')

ReactDOM.render(<App />, container)
