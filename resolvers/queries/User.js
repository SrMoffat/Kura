const { getUserId } = require('../../Utils');

const currentUser = (parent, args, context, info) => {

    const userId = getUserId(context);

    return context.prisma.user(
    {
        user_id: userId
    },
        info
    );
}

module.exports = {
    currentUser
}