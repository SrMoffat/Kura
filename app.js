const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// instance of the app
const app = new GraphQLServer({
    typeDefs,
    resolvers
});

app.start(() => {
    console.log('Server is listening to requests');
});

