import Auth from './Auth';
import Link from './Link';
import Vote from './Vote';
import Cluster from './Cluster';
import Positions from './Position';

const { signUp, login } = Auth;
const { post } = Link;
const { vote } = Vote;
const { createCluster, addMember, addHead } = Cluster;
const { createPosition, addNominee } = Positions;


export default {
    signUp,
    login,
    post,
    vote,
    createCluster,
    createPosition,
    addMember,
    addHead,
    addNominee
}