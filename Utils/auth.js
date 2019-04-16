import * as jwt from 'jsonwebtoken';

const APP_SECRET = process.env.SECRET_KEY;

const getUserId = (context) => {
    const Authorization = context.request.get('Authorization');

    if (Authorization && Authorization !== 'null') {
        const token = Authorization.replace('Bearer ', '');

        const { userId } = jwt.verify(token, APP_SECRET);
        
        return userId;
    }

    throw new AuthError();
}

class AuthError extends Error {
    constructor(){
        super('Unauthorized User!')
    }
}

export default {
    APP_SECRET,
    getUserId,
    AuthError
}
