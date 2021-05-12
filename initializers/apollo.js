const apolloServer = require('apollo-server-express');

const expressInitializer = require('./express');
const query = require('../app/graphql/query');

const gql = apolloServer.gql;

const init = async () => { 
  const app = await expressInitializer.initPromise;

  const typeDefs = gql`
    ${query.typeDefinition}
  `;
  
  const resolvers = [
    query.resolver
  ];
  const server = new apolloServer.ApolloServer({
    typeDefs,
    resolvers
  });
  
  server.applyMiddleware({ app });
}

module.exports = {
  initPromise: init()
};