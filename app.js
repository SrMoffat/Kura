import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './prisma/generated/prisma-client';
import typeDefs from './schema/schema.graphql';
import resolvers from './resolvers';


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



