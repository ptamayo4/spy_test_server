var mongoose = require('mongoose');

// Create the Task schema
var UserSchema = new mongoose.Schema({
    alias: String,
    team: String,
    score: Number
}, {timestamps: true});

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'Task'
