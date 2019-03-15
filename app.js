const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

// instance of the app
const app = express();

// body-parser to parse the request body
app.use(bodyParser.json());

// configure graphQL
app.use('/graphql', graphqlHttp({
    schema: buildSchema(
        `
        type RootQuery {
            clusters: [String!]!            
        }
        type RootMutation {
            createCluster(clusterName: String) : String
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
        `
    ),
    // Resolvers/Controllers
    rootValue: {
        clusters: () => {
            return [
                'Sparks Society',
                'Engineers Council',
                'Invictus Society'
            ]
        },
        createCluster: (args) => {
            const clusterName = args.clusterName;
            return clusterName;
        }
    },
    graphiql: true
}));

// listen to a specific port
app.listen(3000);
