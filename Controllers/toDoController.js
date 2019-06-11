let ToDoModel = require('../Models/toDoModel');

let createToDoItem = (request, response) => {
  let data = request.body;
  let toDo = new ToDoModel();
  toDo.title = data.title;
  toDo.save().then(item => {
    response.json(item).catch(e => {
      response.status(400).json(e);
    });
  });
};

let getAllItems = (request, response) => {
  ToDoModel.find().then(items => {
    response.json(items);
  });
};

module.exports = {
  createToDoItem,
  getAllItems,
};
