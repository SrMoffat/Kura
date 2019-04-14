const links = (parent, args, context) => {
    const { id } = parent;
    return context.prisma.user({
        id
    }).links();
}

const clusters = (parent, args, context) => {
    const { id } = parent;
    return context.prisma.user({
        id
    }).clusters();
}

module.exports = {
    links,
    clusters
}