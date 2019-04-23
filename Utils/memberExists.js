const checkMemberExists = async (context, clusterId, memberId) => {
    const memberExists = (await context.prisma.cluster({
        id: clusterId
    }).members()).find(member => member.id === memberId);

    if (memberExists) {
        throw new Error(
            `User ${memberId} is already a member of cluster ${clusterId}`);
    }
}

export default {
    checkMemberExists
}