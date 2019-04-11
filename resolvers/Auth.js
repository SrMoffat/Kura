const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uuid4 = require('uuid/v4');
const { userPayload } = require('../Utils');

const signUp = async (parent, args, context, info) => {

    await userPayload.validate(args).catch((error) => {
        throw new Error(error.errors);
    });

    const { password, email } = args;

    const hashedPassword = await bcrypt.hash(
        password,
        10
    );

    const userExists = await context.prisma.user({
        email
    });

    if(userExists){
        throw new Error('User Exists!');
    }

    const user = await context.prisma.createUser({
        ...args,
        password: hashedPassword,
        user_id: uuid4()
    });

    const token = jwt.sign({
        userId: user.user_id
        },
        process.env.SECRET_KEY
    );

    return {
        token,
        user
    }
}

const login = async (parent, args, context, info) => {
    const { email, password } = args;

    const user = await context.prisma.user({
        email
    });

    if(!user){
        throw new Error('User Not Found!');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if(!validPassword){
        throw new Error('Invalid credentials!');
    }

    const token = jwt.sign({
        userId: user.id
        },
        process.env.SECRET_KEY
    );

    return {
        token,
        user
    }

}
module.exports = {
    signUp,
    login
}