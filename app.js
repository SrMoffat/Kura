const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// bring models
const Cluster = require('./models/cluster');
const User = require('./models/user');

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

        type User {
            _id: ID!
            firstName: String!
            lastName: String!
            email: String!
            password: String
        }

        input ClusterInput {
            clusterName: String!
            clusterHead: String!
            clusterPositions: [String!]!
            clusterMembers: [String!]!
        }

        input UserInput {
            firstName: String!
            lastName: String!
            email: String!
            password: String!
        }

        type RootQuery {
            clusters: [Cluster!]!
            users: [User!]!           
        }

        type RootMutation {
            createCluster(clusterInput: ClusterInput) : Cluster
            createUser(userInput: UserInput ) : User
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

            return cluster.save()
                .then(result => {
                    console.log('DATA', result);
                    return { ...cluster._doc };
                })
                .catch(error => {
                    console.log('ERROR', error);
                    throw error;
                })
        },
        createUser: (args) => {
            const { userInput: { firstName, lastName, email, password } } = args;

            return User.findOne({
                email
            })
            .then(user => {
                if (user) {
                    throw new Error('User already exists!');
                }
                return bcrypt.hash(password, 12);
            })
            .then(hashedPassword => {
                    const user = new User({
                        firstName,
                        lastName,
                        email,
                        password: hashedPassword
                    });
                    return user.save();
                })
            .then(result => {
                return {...result._doc, password: null };
            })
            .catch(error => {
                console.log('Something went wrong', error);
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
