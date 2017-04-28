/**
 * Created by AF1 on 4/18/17.
 */

// Require Mongoose
var mongoose = require('mongoose');

// Create the Task schema
var TaskSchema = new mongoose.Schema({
    objective: String

}, {timestamps: true});

mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'Task'
