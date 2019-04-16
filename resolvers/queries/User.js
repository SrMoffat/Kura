import utils from '../../Utils';

const { getUserId } = utils;

const currentUser = (parent, args, context, info) => {

    const userId = getUserId(context);

    return context.prisma.user(
    {
        user_id: userId
    },
        info
    );
}

export default {
    currentUser
}