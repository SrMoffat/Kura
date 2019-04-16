import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import uuid4 from 'uuid/v4';
import utils from '../../Utils';

const { userPayload, checkUserPayload } = utils;

const signUp = async (parent, args, context, info) => {

    await checkUserPayload(userPayload, args);

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
        userId: user.user_id
        },
        process.env.SECRET_KEY
    );

    return {
        token,
        user
    }

}
export default {
    signUp,
    login
}