const { getUserId } = require('../../Utils');

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

module.exports = {
    createCluster
}