const findMember = async (context, clusterId, memberId) => {
    const member = (await context.prisma.cluster({
        id: clusterId
    }).members()).find(member => member.id === memberId);

    return member;
}

const findMemberByEmail = async (context, clusterName, memberEmail) => {
    const member = (await context.prisma.cluster({
        clusterName
    }).members()).find(member => member.email === memberEmail);

    return member;
}

// TODO: Abstract the two functions to one 👆

const checkMemberExists = async (context, clusterName, memberEmail) => {
    const memberExists = await findMemberByEmail(context, clusterName, memberEmail);    

    if (memberExists) {
        throw new Error(
            `User ${memberId} is already a member of cluster ${clusterId}`);
    }
    return false
}

const checkMemberInCluster = async (context, clusterId, memberId) => {
    const memberExists = await findMember(context, clusterId, memberId);

    if (memberExists) {
        return memberExists;
    }
    
    throw new Error (`${memberId} is not part of the cluster ${clusterId}`)
}

export default {
    checkMemberExists,
    checkMemberInCluster,
    findMember,
    findMemberByEmail
}