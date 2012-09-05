var mongoose = require('mongoose')
  , mongooseAuth = require('mongoose-auth')
  , conf = require('../config')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  , UserSchema = new Schema({})
  , User;


UserSchema.plugin(mongooseAuth, {
  everymodule: {
    everyauth: {
        User: function () {
          return User;
        }
    }
  }
, facebook: {
    everyauth: {
        myHostname: conf.appUrl
      , appId: conf.fb.appId
      , appSecret: conf.fb.appSecret
      , redirectPath: '/'
    }
  }
});

exports.Schema = UserSchema;
exports.Model = User = mongoose.model('User', UserSchema);

exports.middleware = function() {
  return mongooseAuth.middleware();
};

exports.helpExpress = function(app) {
  mongooseAuth.helpExpress(app);
};
