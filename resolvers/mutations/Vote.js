const { getUserId } = require('../../Utils');

const vote = async (parent, args, context, info) => {
    const userId = getUserId(context);

    const { linkId } = args;

    const linkExists = await context.prisma.$exists.vote({
        voter: { user_id: userId },
        link: { id: linkId }
    });

    if(linkExists){
        throw new Error(`You have already voted for ${linkId}`);
    }

    return context.prisma.createVote({
        voter: {
            connect: {
                user_id: userId
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
    vote
}
