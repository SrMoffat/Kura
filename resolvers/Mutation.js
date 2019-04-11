const { signUp, login } = require('./Auth');
const { getUserId } = require('../Utils');

const post = async (parent, args, context, info) => {
    const userId = getUserId(context);

    const { url, description } = args;

    return context.prisma.createLink({
        url,
        description,
        postedBy: {
            connect: {
                id: userId
            }
        }
    });
}

const vote = async (parent, args, context, info) => {
    const userId = getUserId(context);

    const { linkId } = args;

    const linkExists = await context.prisma.$exists.vote({
        voter: { id: userId },
        link: { id: linkId }
    });

    if(linkExists){
        throw new Error(`You have already voted for ${linkId}`);
    }

    return context.prisma.createVote({
        voter: {
            connect: {
                id: userId
            }
        },
        link: {
            connect: {
                id: linkId
            }
        }
    });
}

module.exports = {
    signUp,
    login,
    post,
    vote
}
