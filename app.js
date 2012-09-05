
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./lib/controllers')
  , mongoose = require('mongoose')
  , authentication = require('./lib/authentication')
  , common = require('./lib/middleware/common')
  , RedisStore = require('connect-redis')(express)
  , conf = require('./config')
  , util = require('./lib/util');

var app = module.exports = express.createServer();

util.setAppServiceSettings(app, conf.redis);
mongoose.connect(conf.mongodb);

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/lib//views');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());

  // session store in memory

  // app.use(express.session({ secret : 'my happy go lucky2' }));

  // session store in redis

  app.use(express.session({ 
    secret: 'my happy go lucky friend', 
    store: new RedisStore({
      host: app.set('redis:hostname'),
      port: app.set('redis:port'),
      db: app.set('redis:user'),
      pass: app.set('redis:pass')
    }) 
  }));

  // cross site request forgery prevention
  // app.use(express.csrf());
  app.use(express.static(__dirname + '/public'));


  // facebook authentication
  app.use(authentication.middleware(app));
  app.use(common);
  // app.use(app.router);

});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


// app.dynamicHelpers({
//   token: function(req, res) {
//     return req.session._csrf;
//   }
// });



// Routes

app.get('/', routes.index);
app.get('/admin', routes.admin);
app.get('/products', routes.products);
app.get('/product/:id/delete', routes.delete);
app.post('/bid/:id', routes.bid);
app.post('/product/new', routes.create);
app.post('/product/:id', routes.update);

authentication.helpExpress(app);

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);