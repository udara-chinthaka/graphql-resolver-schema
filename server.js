const { ApolloServer, gql } = require('apollo-server');
const { resolvers, dataSources } = require('./resolver');
const typeDefs = require('./schema');


const gqlServer = new ApolloServer({ typeDefs, resolvers, dataSources });

gqlServer.listen({ port: process.env.port || 4000 })
    .then(({ url }) => { console.log(`GraphQL server started on ${url}`); })
    .catch(() => {
        console.log('Unable to start the server');
    });