import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import uuid4 from 'uuid/v4';
import utils from '../../Utils';

const { userPayload, checkUserPayload } = utils;

const signUp = async (parent, args, context, info) => {

    const error = await checkUserPayload(userPayload, args);

    if(error){
        const { path, message } = error;

        return {
            error: {
                field: path,
                message
            }
        }
    }

    const { password, email } = args;

    const hashedPassword = await bcrypt.hash(
        password,
        10
    );

    const userExists = await context.prisma.user({
        email
    });

    if(userExists){
        return {
            error: {
                field: 'email',
                message: 'User Exists!'
            }
        }
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
        payload: {
            message: 'Successfully registered!',
            token,
            user
        }
    }
}

const login = async (parent, args, context, info) => {
    const { email, password } = args;

    const user = await context.prisma.user({
        email
    });

    if(!user){
        return {
            error: {
                field: 'email',
                message: 'User Not Found!'
            }
        }
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if(!validPassword){
        return {
            error: {
                field: 'password',
                message: 'Invalid credentials!'
            }
        }
    }

    const token = jwt.sign({
        userId: user.user_id
        },
        process.env.SECRET_KEY
    );

    return {
        payload: {
            message: 'Successfully logged in!',
            token,
            user
        }
    }

}
export default {
    signUp,
    login
}