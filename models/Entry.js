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
    // goal_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'goals'
    // },
    // role_id: {
    //     type: Integer,
    //     required: true
    // },
    // report_id: {
    //     type: Integer,
    //     required: true
    // },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('entries', EntrySchema);