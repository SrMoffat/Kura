module.exports = {
    Query: {
        info: () => 'This is it',
        feed: (parent, args, context, info) => {
            return context.prisma.links()
        }
    },
    Mutation: {
        post: (parent, args, context) => {
            const { url, description } = args;
            return context.prisma.createLink({
                url,
                description
            });
        }
    }
}