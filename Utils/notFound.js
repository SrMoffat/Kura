const throwIfNotFound = async (context, model, field, value) =>  {

    const result = await context.prisma.$exists[model]({ [field] : value });

    if (!result){
        throw new Error(`No ${model} found for ${value}!`);
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