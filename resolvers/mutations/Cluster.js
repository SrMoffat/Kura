import utils from '../../Utils';

const { getUserId, throwIfNotFound, checkIfClusterHead, checkMemberExists } = utils;

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

    const { clusterId, memberId } = args; 

    await throwIfNotFound(context, 'cluster', clusterId);
    await throwIfNotFound(context, 'user', memberId);
    await checkIfClusterHead(context, clusterId);
    await checkMemberExists(context, clusterId, memberId);

    return context.prisma.updateCluster({
        where: {
            id: clusterId
        },
        data: {
            members: {
                connect : { id: memberId }
            }
        }
    });
}

export default {
    createCluster,
    addMember
}
