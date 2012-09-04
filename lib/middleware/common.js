var conf = require('../../config');

exports = module.exports = function(req, res, next) {

  req.page = conf.page;

  next();
};