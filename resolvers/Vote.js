const link = (parent, args, context, info) => {
    const { id } = parent;
    return context.prisma.vote({
        id
    }).link();
}

const voter = (parent, args, context, info) => {
    const { id } = parent;
    return context.prisma.vote({
        id
    }).voter();
}

module.exports = {
    link,
    voter
}