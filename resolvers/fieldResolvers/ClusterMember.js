const cluster = (parent, args, context, info) => {
    const { id } = parent;

    return context.prisma.clusterMember({
        id
    }).cluster();

}

const member = (parent, args, context, info) => {
    const { id } = parent;

    return context.prisma.clusterMember({
        id
    }).member();
}

export default {
    cluster,
    member
}

