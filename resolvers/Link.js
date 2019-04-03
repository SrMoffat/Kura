function postedBy (parent, args, context) {
    const { id } = parent;
    return context.prisma.link({
        id
    }).postedBy();
}

module.exports = {
    postedBy
}