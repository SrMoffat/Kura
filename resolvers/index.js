import Query from '../resolvers/queries';
import Mutation from '../resolvers/mutations';
import Subscription from '../resolvers/subscriptions';
import fieldResolvers from '../resolvers/fieldResolvers';

const {
    User,
    Link,
    Vote,
    Cluster,
    Position
} = fieldResolvers;

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
    Cluster,
    Position
}

export default resolvers;
