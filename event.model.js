const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
    title: {
        type: String
    },
    phone: {
        type: String
    },
    email_address: {
        type: String
    },
    job_address: {
        type: String
    },
    employee: {
        type: String
    },
    start: {
        type: String
    },
    end: {
        type: String
    },
    work_requested: {
        type: String
    },
    date_repaired: {
        type: String
    },
    performed_by: {
        type: String
    },
    repairs_performed: {
        type: String
    },
    labor: {
        type: String
    },
    hours: {
        type: String
    },
    materials: {
        type: String
    },
    room: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Event', Event);