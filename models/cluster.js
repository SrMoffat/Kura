const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// data schema for voting cluster
const clusterSchema = new Schema({
    clusterName: {
        type: String,
        required: true
    },
    clusterHead: {
        type: String,
        required: true
    },
    clusterPositions: {
        type: [String],
        required: true
    },
    clusterMembers: {
        type: [String],
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Cluster', clusterSchema);

