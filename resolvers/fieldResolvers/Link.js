const postedBy = (parent, args, context, info) => {
    const { id } = parent;
    return context.prisma.link({
        id
    }).postedBy();
}

const votes = (parent, args, context, info) => {
    const { id } = parent;
    return context.prisma.link({
        id
    }).votes();
}

export default {
    postedBy,
    votes
}