const info = () => '4fr0c0d3 is 0n';

const feed = (parent, args, context, info) => {
    return context.prisma.links();
}

module.exports = {
    info,
    feed
}
