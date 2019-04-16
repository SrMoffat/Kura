import auth from './auth';
import payload from './userPayloadValidator';

const  { userPayload, checkUserPayload }= payload;
const { APP_SECRET, getUserId, AuthError } = auth;

export default {
    APP_SECRET,
    getUserId,
    AuthError,
    userPayload,
    checkUserPayload
}