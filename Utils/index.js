import auth from './auth';
import payload from './userPayloadValidator';
import throwIfNotFound from './notFound';
import checkClusterHead from './notHead';
import checkMemberInCluster from './memberExists';

const  { userPayload, checkUserPayload }= payload;
const { APP_SECRET, getUserId, AuthError } = auth;
const { checkIfClusterHead } = checkClusterHead;
const { checkMemberExists } = checkMemberInCluster;

export default {
    APP_SECRET,
    getUserId,
    AuthError,
    userPayload,
    checkUserPayload,
    throwIfNotFound,
    checkIfClusterHead,
    checkMemberExists
}