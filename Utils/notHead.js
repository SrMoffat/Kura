import auth from './auth';

const { getUserId } = auth;

const getClusterHead = async (context, clusterId) => {
    const clusterHead = (await context.prisma.cluster({
        id: clusterId
    }).clusterHead()).user_id;

    return clusterHead;
}

const checkIfClusterHead = async (context, clusterName) => {
    const currentUser = getUserId(context);

    const clusterId = (await context.prisma.cluster({
        clusterName
    })).id

    const clusterHead = await getClusterHead(context, clusterId);

    if (!(currentUser === clusterHead)) {
        throw new RightsError();
    }
    return clusterHead
}

const checkAlreadyHead = async (context, clusterId, headId) => {
    const clusterHead = (await context.prisma.cluster({
        id: clusterId
    }).clusterHead()).id;

    if (clusterHead === headId) {
        throw new Error ('User is already the cluster head!');
    }

    return clusterHead;
}


class RightsError extends Error {
    constructor(){
        super('You are not the head for this cluster!')
    }
}

export default {
    checkIfClusterHead,
    checkAlreadyHead
}
