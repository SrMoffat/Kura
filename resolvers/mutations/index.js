import Auth from './Auth';
import Link from './Link';
import Vote from './Vote';
import Cluster from './Cluster';
import Position from './Position';

const { signUp, login } = Auth;
const { post } = Link;
const { vote } = Vote;
const { createCluster, addMember, addHead } = Cluster;
const { createPosition } = Position;


export default {
    signUp,
    login,
    post,
    vote,
    createCluster,
    createPosition,
    addMember,
    addHead
}