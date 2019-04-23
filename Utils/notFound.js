const throwIfNotFound = async (context, model, id) =>  {

    const result = await context.prisma.$exists[model]({ id });
    if (!result){
        throw new Error(`No ${model} with <ID> <${id}> exists!`);
    }

    return result;
}

export default throwIfNotFound;