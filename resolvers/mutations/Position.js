import utils from '../../Utils';
const { getUserId } = utils

const createPosition = (parent, args, context, info) => {
    getUserId(context);

    const { positionName } = args;

    return context.prisma.createPosition({
        positionName        
    });

}

export default {
    createPosition
}