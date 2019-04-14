const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./prisma/generated/prisma-client');
const typeDefs = require('./schema/schema.graphql');
const resolvers = require('./resolvers');

// instance of the app
const app = new GraphQLServer({
    typeDefs,
    resolvers,
    context: request => {
        return { 
            ...request,
            prisma
        }
    }
});

app.start(() => {
    console.log('👽 == Server is listening for requests == 👽 ');
});


