let authenticate = (req, res, next) => {
  let something = 'String';

  req.something = something;
  console.log('from middleware', req.something);

  next();
};

module.exports = {
  authenticate,
};
