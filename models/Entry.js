const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    description: {
        type: String,
        required: true
    },
    importance: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    // goal_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'goals'
    // },
    // role_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'roles'
    // },
    // report_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'reports'
    // },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('entries', EntrySchema);