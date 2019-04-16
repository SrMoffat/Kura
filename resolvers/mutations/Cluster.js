import utils from '../../Utils';

const { getUserId } = utils;

const createCluster = async (parent, args, context, info) => {

    const userId = getUserId(context);

    const { clusterName } = args;

    return context.prisma.createCluster({
        clusterName,
        clusterHead: {
            connect: {
                user_id: userId
            }
        }
    });
}

const addMember = async (parent, args, context, info) => {
    const userId = getUserId(context);

    const { clusterId, memberId } = args;

    

    return context.prisma.createClusterMember({
        clusterId,
        memberId
    });

}
export default createCluster;