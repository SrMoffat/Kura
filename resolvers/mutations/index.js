const { post } = require('./Link');
const { vote } = require('./Vote');
const { createCluster } = require('./Cluster');
const { signUp, login } = require('./Auth');

module.exports = {
    signUp,
    login,
    post,
    vote,
    createCluster
}