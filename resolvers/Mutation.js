const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getUserId } = require('../Utils');

async function signUp (parent, args, context, info) {
    const { password } = args;

    const hashedPassword = await bcrypt.hash(
        password,
        10
    );

    const user = await context.prisma.createUser({
        ...args,
        password: hashedPassword
    });

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

async function login (parent, args, context, info) {
    const { email, password } = args;

    const user = await context.prisma.user({
        email
    });

    if(!user){
        throw new Error('User Not Found');
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

async function post (parent, args, context, info) {
    const { userId } = getUserId(context);
    const { url, description } = args;

    return context.prisma.createLink({
        url,
        description,
        postedBy: {
            connect: {
                id: userId
            }
        }
    });
}


module.exports = {
    signUp,
    login,
    post
}

const thefunction = async () => {

}