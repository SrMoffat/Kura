import auth from './auth';
import payload from './userPayloadValidator';
import notFound from './notFound';
import checkClusterHead from './notHead';
import checkClusterMembers from './memberExists';

const  { userPayload, checkUserPayload }= payload;
const { APP_SECRET, getUserId, AuthError } = auth;
const { checkIfClusterHead, checkAlreadyHead } = checkClusterHead;
const { checkMemberExists, checkMemberInCluster, findMember, findMemberByEmail } = checkClusterMembers;
const { throwIfNotFound, throwIfNotExisting } = notFound;

export default {
    APP_SECRET,
    getUserId,
    AuthError,
    userPayload,
    checkUserPayload,
    throwIfNotFound,
    throwIfNotExisting,
    checkIfClusterHead,
    checkMemberExists,
    checkMemberInCluster,
    checkAlreadyHead,
    findMember,
    findMemberByEmail
}