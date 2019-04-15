const { getUserId } = require('../../Utils');

const createPosition = (parent, args, context, info) => {
    getUserId(context);

    const { positionName } = args;

    return context.prisma.createPosition({
        positionName        
    });

}

module.exports = {
    createPosition
}