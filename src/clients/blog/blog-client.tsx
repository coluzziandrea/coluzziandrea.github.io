import { ApolloClient, InMemoryCache } from '@apollo/client'

const createBlogClient = () => {
  return new ApolloClient({
    uri: 'https://gql.hashnode.com/',
    cache: new InMemoryCache(),
  })
}

export default createBlogClient
