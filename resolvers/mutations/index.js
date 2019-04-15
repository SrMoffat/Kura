const { signUp, login } = require('./Auth');
const { post } = require('./Link');
const { vote } = require('./Vote');
const { createCluster } = require('./Cluster');
const { createPosition } = require('./Position');


module.exports = {
    signUp,
    login,
    post,
    vote,
    createCluster,
    createPosition
}