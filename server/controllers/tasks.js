/**
 * Created by AF1 on 4/18/17.
 */

// Require Mongoose
var mongoose = require('mongoose');

// Require the model and save it in a variable
var Task = mongoose.model('Task');
var User = mongoose.model('User');
var Session = mongoose.model('Session');

var stuff = []
stuff.push({objective: "Take Out Trash"})


module.exports = (function() {
    return {

        index: function(req, res) {
          // Find all tasks and then return that data in res.json()
          Task.find({}, function(err,data){
            if(err){
              res.json({})
            } else {
              res.json(data)
            }
          })
        },

        addTask: function(req, res){
          console.log(req.body);
          var newTask = new Task(req.body)
          newTask.save(function(err,data){
            if(err){
              console.log(err);
            } else {
              console.log("TASK ADDED", data);
              res.sendStatus(200)
            }
          })
        },

        test: function(req, res) {
          var newTask = new Task(stuff[0]);
          newTask.save(function(err, data){
              if(err){
                  res.status(400).send("Error when adding task");
              } else {
                  res.sendStatus(200);
              }
          })
        },

        addUser: function(req, res){
          var newUser = new User(req.body)
          console.log(newUser);
          newUser.save(function(err, data){
            if(err){
              console.log(err);
            } else {
              res.sendStatus(200)
            }
          })
        },

        getUsers: function(req, res) {
          User.find({}, function(err,data){
            if(err){
              res.json({})
            } else {
              res.json(data)
            }
          })
        },

        getSingleUser: function(req, res){
          User.findOne({alias: req.body.alias}, function(err,data){
            if(data != null){
              res.json(data)
            } else {
              res.json({user: "not found"})
            }
          })
        },

        addGuestToGame: function(req,res){
          console.log(req.body);
          Session.findOne({_id: req.body.id}, function(err,foundGame){
            if(err){
              console.log(err);
            } else {
              foundGame.guest = req.body.guest
              foundGame.save(function(err,data){
                if(err){
                  console.log(err);
                } else {
                  res.sendStatus(200)
                }
              })
            }
          })
        },

        //Are sessions still necessary? Is this question a byproduct of not being awake yet?
        getSessions: function(req, res) {
          Session.find({}, function(err,data){
            if(err){
              res.json({})
            } else {
              res.json(data)
            }
          })
        },

        getAgencies: function(req, res){
          // TODO: Add agency funtionality, agency consists of two departments, ie. teams
          // TODO: I love the capture the flasg idea, needs to be fleshed out
        },

        addSession: function(req, res){
          console.log(req.body);
          var newSesh = new Session(req.body)
          newSesh.save(function(err){
            if(err){
              console.log(err);
              res.sendStatus(400)
            } else {
              console.log(newSesh);
              res.json(newSesh)
            }
          })
        },

        getSessionStatus: function(req,res){
          console.log(req.body);
          Session.findOne({_id:req.body.id}, function(err,data){
            if(data != null ){
              res.json(data)
            } else {
              console.log(err);
              res.sendStatus(400)
            }
          })
        },

        hostButtonPressed: function(req,res){
          Session.findOne({_id:req.body.id}, function(err, foundGame){
            if (err){
              console.log(err);
            } else {
              foundGame.hostButtonTime = req.body.time;
              foundGame.save(function(err,data){
                if(err){
                  console.log(err);
                  res.sendStatus(400)
                } else {
                  res.sendStatus(200)
                }
              })
            }
          })
        },

        guestButtonPressed: function(req,res){
          Session.findOne({_id:req.body.id}, function(err, foundGame){
            if (err){
              console.log(err);
            } else {
              foundGame.guestButtonTime = req.body.time;
              foundGame.save(function(err,data){
                if(err){
                  console.log(err);
                  res.sendStatus(400)
                } else {
                  res.sendStatus(200)
                }
              })
            }
          })
        },





    }
})();
