const clusterHead = (parent, args, context, info) => {
    const { id } = parent;
    return context.prisma.cluster({
        id
    }).clusterHead();
}

module.exports = {
    clusterHead
}