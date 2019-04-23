import auth from './auth';

const { getUserId } = auth;

const checkIfClusterHead = async (context, clusterId) => {
    const currentUser = getUserId(context);

    const clusterHead = (await context.prisma.cluster({
        id: clusterId
    }).clusterHead()).user_id;

    if (!(currentUser === clusterHead)) {
        throw new RightsError();
    }
    return clusterHead
}


class RightsError extends Error {
    constructor(){
        super('You are not the head for this cluster!')
    }
}

export default {
    checkIfClusterHead
}
