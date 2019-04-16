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

export default {
    links,
    clusters
}