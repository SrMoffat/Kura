function links (parent, args, context) {
    const { id } = parent;
    return context.prisma.user({
        id
    }).links();
}

module.exports = {
    links
}