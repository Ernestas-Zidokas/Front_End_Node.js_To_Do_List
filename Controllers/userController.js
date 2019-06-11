let UserModel = require('../Models/userModel');

let register = (request, response) => {
  let data = request.body;
  if (data.password == data.passwordAgain) {
    let user = new UserModel();
    user.email = data.email;
    user.password = data.password;
    user.save().then(user => {
      response.json(user).catch(e => {
        response.status(400).json(e);
      });
    });
  } else {
    response.status(401).json('passwords dont match');
  }
};

let login = (request, response) => {
  console.log('from login', request.something);

  let data = request.body;
  UserModel.findOne({ email: data.email })
    .then(user => {
      if (user) {
        if (data.password == user.password) {
          response.json(user);
        } else {
          response.status(401).json('wrong password');
        }
      } else {
        response.status(401).json('no such user');
      }
    })
    .catch(e => {
      response.status(400).json(e);
    });
};

let getUser = (request, response) => {
  let data = request.body;
  UserModel.find({ email: data.email }).then(user => {
    response.json(user);
  });
};

module.exports = {
  register,
  getUser,
  login,
};
