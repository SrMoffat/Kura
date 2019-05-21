const throwIfNotFound = async (context, model, id) =>  {

    const result = await context.prisma.$exists[model]({ id });
    if (!result){
        throw new Error(`No ${model} with <ID> <${id}> exists!`);
    }

    return result;
}

const throwIfNotExisting = async (context, model, column, value) =>  {
    const stringColumn = `${column}_contains`;

    const result = await context.prisma.$exists[model]({
        [stringColumn] : value
    });
    if (!result){
        throw new Error(`${column} provided does not exist!`);
    }

    return result;
}


export default {
    throwIfNotFound,
    throwIfNotExisting
}