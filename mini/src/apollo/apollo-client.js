import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client"; 


  const client = new ApolloClient({
    uri: 'https://teaching-drum-91.hasura.app/v1/graphql',
    cache: new InMemoryCache(), 
    headers: { 'x-hasura-admin-secret':
    'yZxsvgI5wpnJOiVGaQPc10J0Bg76YWSLQJ0i1xUZTAn002j95Uvhr5jy4gNVpD5P' 

    }
  }); 
  export default client