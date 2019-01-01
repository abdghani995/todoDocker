var path = require('path');
var todoController = require(path.join('..','controller','todo.controller'))
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.send({
    "status":"Working"
  })
  return next();
});

router.post("/todo", todoController.addTodo);
router.get("/todo", todoController.listTodo);
router.get("/todo/:id", todoController.fetchTodo);
router.delete("/todo/:id", todoController.deleteTodo);;

module.exports = router;
