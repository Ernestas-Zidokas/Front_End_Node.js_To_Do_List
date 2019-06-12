let ToDoModel = require('../Models/toDoModel');

let createToDoItem = (request, response) => {
  let data = request.body;
  let toDo = new ToDoModel();
  toDo.title = data.title;
  toDo.creator = request.user._id;
  toDo.save().then(item => {
    response.json(item).catch(e => {
      response.status(400).json(e);
    });
  });
};

let getAllItems = (request, response) => {
  ToDoModel.find({
    creator: request.user._id,
  }).then(items => {
    response.json(items);
  });
};

let deleteItem = (req, res) => {
  let data = req.body;
  ToDoModel.deleteOne({
    creator: req.user._id,
    _id: data._id,
  })
    .then(item => {
      res.json(item);
    })
    .catch(e => {
      res.status(400).json(e);
    });
};

let markAllChecked = (req, res) => {
  ToDoModel.updateMany(
    { creator: req.user._id },
    {
      checked: true,
    },
  ).then(updatedItems => {
    res.json(updatedItems).catch(e => {
      res.status(400).json(e);
    });
  });
};

module.exports = {
  createToDoItem,
  getAllItems,
  deleteItem,
  markAllChecked,
};
