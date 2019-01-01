var path = require('path');
var mongoose = require('mongoose');
var todo = require(path.join(__dirname, '..', 'models', 'todo'));

var addTodo = function(req, res, next){
  var newtodo = new todo({
    content: req.body.content,
    pics: ""
  })
  newtodo.save(function(err, data){
    if(!err){
      res.status(200);
      res.send({
        "status": true,
        "message":"todo added successfully",
        "data": data
      })
    }else{
      res.status(501);
      res.send({
        "status": false,
        "message":"Error adding todo",
        "data": null
      })
    }
    return next();
  })
}

var listTodo = function(req, res, next){
  todo.find(function(err, data){
    if(!err){
      res.status(200);
      res.send({
        status: true,
        todo: data
      })
    }else{
      res.status(501);
      res.send({
        "status": false,
        "message":"Error listing todo"
      })
    }
    return next();
  })
}

var fetchTodo = function(req, res, next){
  var todo_id = null;
  var status = true;
  var code = 200;
  var message = "";
  var data = {};

  if(req.params.id != undefined){
    var todo_id = req.params.id;
  }else{
    status = false;
    message = "Invalid todo id"
    data : null
  }
  if(status == true){
    todo.findById(todo_id)
    .exec(function(err, todo_data){
      if(todo_data == null){
        data = null
        message = "Todo not found"
        code = 404
        status = false
        console.log("aya");
        
      }
      else if(!err){
        data = todo_data
        message = "Todo found"
      }else{
        status = false
        code = 404
        data = {
          _id : todo_id,
        }
        message ="Todo not found"
      }
      res.status(code);
      res.send({
        "status":status,
        "message": message,
        "data": data
      })
      return next();
    })
  }else{
    code = 500
    status = false;
    message = "Error fetching todo",
    data = {
      _id : todo_id,
    }
    res.status(code);
    res.send({
      "status":status,
      "message": message,
      "data": data
    })
    return next();
  }  
  
}

var deleteTodo = function(req, res,next){
  var ObjectId = mongoose.Types.ObjectId;
  var todo_id = null;
  if(req.params.id != undefined){
    todo.findOneAndRemove(req.params.id,function(err,data){
      if(!err){
        res.status(200);
        res.send({
          "message":"Todo deleted"
        })
      }else{
        next(err)
      }
    })
  }else{
    next("No id found")
  }
}

exports.addTodo = addTodo;
exports.listTodo = listTodo;
exports.fetchTodo = fetchTodo;
exports.deleteTodo = deleteTodo