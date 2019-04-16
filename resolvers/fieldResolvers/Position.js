const nominees = (parent, args, context, info) => {
    const { id } = parent;
    
    return context.prisma.position({
        id
    }).nominees();
}

export default {
    nominees
}