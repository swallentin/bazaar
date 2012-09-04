var Product = require('../models/product').Model;

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
    title: 'Express',
    page: req.page
  })
};

exports.admin = function(req, res){
  Product.find().sort('url').exec(function(err, docs) {
    res.render('admin', { 
      title: 'Express',
      products: docs ,
      page: req.page
    });
  });
};

exports.delete = function(req, res) {
  Product.findByIdAndRemove(req.params.id, function() {
    res.redirect('/admin');
  })
};

exports.create = function(req, res) {
  var product = new Product(req.body);

  product.save(function(err, doc) {
    if( err) {
      res.send( { message: err.toString() } );
      return;
    }

    res.redirect('/admin#'+doc._id);
  });

};


exports.update = function(req, res) {

  Product.findByIdAndUpdate(req.params.id, req.body, function(err, doc) {
    res.redirect('/admin#'+req.params.id);
  });

};

exports.products = function(req, res) {
  Product.find().sort('url').exec(function(err, data) {
      
      if(err)
        res.json(500, {message:"problems"});
      else
        res.json(data);
  });
};

exports.bid = function(req, res) {

  var action = req.body.action || "bid"
    , auth = req.session.auth;

  if( auth == undefined ) {
    res.send( { message: "Not logged in"});
    return;
  }

  Product.findOne({ _id: req.params.id }, function(err, product) {
    if( err ) {
      res.send({ message: err.toString() });
      return;
    }

    if( product.lastBidder == auth.facebook.user.username) {
      res.send( { message: "You already have the latest bid of this product." });
      return;
    }

    product.lastBidder = auth.facebook.user.username;

    var bid;

    if( action == "bid" ) {
      bid = product.currentPrice + product.minBid;
    }
    else if( action == "maxBid") {
      bid = product.maxPrice;
    }

    product.currentPrice = bid;

    product.isSold = product.currentPrice >= product.maxPrice;
    if( product.isSold ) {
      product.currentPrice = product.maxPrice;
    }

    console.log(action);
    console.log("currentPrice: ", product.currentPrice);
    console.log("bidder: ", product.lastBidder);
    product.save( function( err, doc ) {
      res.send(doc);
    });
  });
};