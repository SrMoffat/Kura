const Query = require('../resolvers/queries');
const Mutation = require('../resolvers/mutations');
const Subscription = require('../resolvers/subscriptions');
const {
    User,
    Link,
    Vote,
    Cluster
} = require('../resolvers/fieldResolvers');

module.exports = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
    Cluster  
}
