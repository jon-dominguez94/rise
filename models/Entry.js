const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    description: {
        type: String,
        required: true
    },
    importance: {
        type: Number,
        required: true
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
    // },
    // goal: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'goals'
    // },
    // role: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'roles'
    // },
    // report: {
    //     type: Schema.Types.ObjectId, 
    //     ref: 'reports'
    // },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('entries', EntrySchema);