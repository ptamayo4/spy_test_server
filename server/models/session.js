var mongoose = require('mongoose');

// Create the Task schema
var SessionSchema = new mongoose.Schema({
    //Both should be relational if necessary, peace of mind
    host: String,
    guest: String,
    session_creation_time: String,
    team: String,
    hostButtonTime: String,
    guestButtonTime: String
}, {timestamps: true});

mongoose.model('Session', SessionSchema); // We are setting this Schema in our Models as 'Task'
