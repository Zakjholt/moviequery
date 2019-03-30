const { ApolloServer } = require('apollo-server')

const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')

// create the apollo server using schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers
})

const port = process.env.PORT || 5001

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
