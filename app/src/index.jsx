import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'src/routing/components/Router'

const App = () => <Router />

const container = document.getElementById('app')

ReactDOM.render(<App />, container)
