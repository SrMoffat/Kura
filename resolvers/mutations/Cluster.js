import utils from '../../Utils';

const { 
    getUserId, throwIfNotFound, checkIfClusterHead,
    checkMemberExists, checkMemberInCluster, checkAlreadyHead
} = utils;

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

const addHead = async (parent, args, context, info) => {
    const { clusterId, headId } = args;

    await throwIfNotFound(context, 'cluster', clusterId);
    await throwIfNotFound(context, 'user', headId);
    await checkIfClusterHead(context, clusterId);
    await checkMemberInCluster(context, clusterId, headId);
    await checkAlreadyHead(context, clusterId, headId);

    return context.prisma.updateCluster({
        where: {
            id: clusterId
        },
        data: {
            clusterHead: {
                connect: { id: headId }
            }
        }
    });

}

export default {
    createCluster,
    addMember,
    addHead
}
