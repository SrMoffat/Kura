import utils from '../../Utils';
const { getUserId } = utils

const post = async (parent, args, context, info) => {
    const userId = getUserId(context);

    const { url, description } = args;

    return context.prisma.createLink({
        url,
        description,
        postedBy: {
            connect: {
                user_id: userId
            }
        }
    });
}

export default {
    post
}
