const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

// bring cluster model
const Cluster = require('./models/cluster');

// instance of the app
const app = express();

// body-parser to parse the request body
app.use(bodyParser.json());

// configure graphQL
app.use('/graphql', graphqlHttp({
    schema: buildSchema(
        `
        type Cluster {
            _id: ID!
            clusterName: String!
            clusterHead: String!
            clusterPositions: [String!]!
            clusterMembers: [String!]!
        }

        input ClusterInput {
            clusterName: String!
            clusterHead: String!
            clusterPositions: [String!]!
            clusterMembers: [String!]!

        }
        type RootQuery {
            clusters: [Cluster!]!            
        }

        type RootMutation {
            createCluster(
                clusterInput: ClusterInput                
            ) : Cluster
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
            console.log('HERE');
            return Cluster.find()
                .then(clusters => {
                    return clusters.map(cluster => {
                        return { ...cluster._doc }
                    })
                })
                .catch(error => {
                    console.log('Something went wrong');
                    throw error;
                });
        },
        createCluster: (args) => {
            const { clusterInput: { clusterName, clusterHead, clusterMembers, clusterPositions } } = args;
            const cluster = new Cluster({
                clusterName,
                clusterHead,
                clusterPositions,
                clusterMembers                
            });

            return cluster
                .save()
                .then(result => {
                    console.log('DATA', result);
                    return { ...cluster._doc };
                })
                .catch(error => {
                    console.log('ERROR', error);
                    throw error;
                })
        }
    },
    graphiql: true
}));

// mongoose --> mongo connection

mongoose.connect(
    `mongodb+srv://${
        process.env.MONGO_USER}:${
        process.env.MONGO_PASSWORD
    }@kura-m1fsa.mongodb.net/${
        process.env.MONGO_DB
    }?retryWrites=true`,
    { useNewUrlParser: true }
    )
    .then(() => {
        // listen to a specific port
        console.log('Connecting to server')
        app.listen(3000);
    })
    .catch(err => {
        console.log('==Something went wrong==', err);
    });
