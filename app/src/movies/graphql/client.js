import ApolloClient from 'apollo-boost'
import { API_URL } from './conf'

const client = new ApolloClient({
  uri: `${API_URL}/graphql`
})

export default client
