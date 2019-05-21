import utils from '../../Utils';
const { 
    getUserId, throwIfNotExisting
} = utils

const createPosition = (parent, args, context, info) => {
    getUserId(context);

    const { positionName, clusterName } = args;

    return context.prisma.createPosition({
        positionName,
        cluster: {
            connect: {
                clusterName
            }
        }       
    });
}

const addNominee = async (parent, args, context, info) => {
    const { positionName, nomineeEmail: email } = args;

    /*
    1. Check for duplicate nominees --> you have already nominated the user
    */

    await throwIfNotExisting(context, 'user', 'email', email);
    await throwIfNotExisting(context, 'position', 'positionName', positionName);

    return context.prisma.updatePosition({
        where: {
            positionName
        },
        data: {
            nominees: {
                connect: {
                    email
                }
            }
        }
    });

}

export default {
    createPosition,
    addNominee
}