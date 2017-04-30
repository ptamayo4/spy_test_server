/**
 * Created by AF1 on 4/18/17.
 */


// Require the controllers
var tasks = require('./../controllers/tasks.js');

// Define the routes
module.exports = function(app) {
    app.get('/create', function(req, res){
      tasks.test(req, res);
    });

    app.get('/users', function(req, res){
      tasks.getUsers(req, res);
    });

    app.get('/sessions', function(req, res){
      tasks.getSessions(req, res);
    })

    app.post('/tasks', function(req,res){
      tasks.addTask(req,res)
    })

    app.post('/addUser', function(req,res){
      tasks.addUser(req, res)
    })

    app.post('/users', function(req, res){
      tasks.getSingleUser(req, res)
    })

    app.post('/sessions', function(req,res){
      tasks.addSession(req,res)
    })

    app.post('/addGuest', function(req,res){
      tasks.addGuestToGame(req,res)
    })

    app.post('/getSessionStatus', function(req,res){
      tasks.getSessionStatus(req,res)
    })

    app.post('/hostButtonPressed', function(req,res){
      tasks.hostButtonPressed(req,res)
    })

    app.post('/guestButtonPressed', function(req,res){
      tasks.guestButtonPressed(req,res)
    })

};
