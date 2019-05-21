const nominees = (parent, args, context, info) => {
    const { id } = parent;
    
    return context.prisma.position({
        id
    }).nominees();
}

const cluster = (parent, args, context, info) => {
    const { id } = parent;

    return context.prisma.position({
        id
    }).cluster();
}

export default {
    nominees,
    cluster
}