const clusterHead = (parent, args, context, info) => {
    const { id } = parent;
    return context.prisma.cluster({
        id
    }).clusterHead();
}

const positions = (parent, args, context, info) => {
    const { id } = parent;

    return context.prisma.cluster({
        id
    }).positions();
}

const members = (parent, args, context, info) => {
    const { id } = parent;

    return context.prisma.cluster({
        id
    }).members();
}

export default {
    clusterHead,
    positions,
    members
}