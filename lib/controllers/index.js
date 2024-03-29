var Product = require('../models/Product').Model;

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
    title: 'Welcome to Wallenbergs Bazaar',
    page: req.page
  })
};

exports.admin = function(req, res){
  // Product.find().sort('url').exec(function(err, docs) {
  Product.find().sort('index', 'ascending').exec(function(err, docs) {
    res.render('admin', { 
      title: 'Express',
      products: docs ,
      page: req.page
    });
  });
};

exports.delete = function(req, res) {
  Product.find({ _id: req.params.id }).remove(function() {
    res.redirect('/admin');
  });
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
  req.body.isSold = req.body.isSold == 'on';
  Product.update({_id: req.params.id }, req.body, function(err, doc) {
    res.redirect('/admin');
  });
};

exports.products = function(req, res) {
  // Product.find().sort('url').exec(function(err, data) {
  Product.find({isSold: false}).sort('index', 'ascending').exec(function(err, data) {
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
    res.send( { message: "Not logged in."});
    return;
  }

  Product.findOne({ _id: req.params.id }, function(err, product) {
    if( err ) {
      res.send({ message: err.toString() });
      return;
    }

    if( product.lastBidder == auth.facebook.user.link) {
      res.send( { message: "You already have the latest bid of this product." });
      return;
    }

    product.lastBidder = auth.facebook.user.link;

    var bid;

    if( action == "bid" ) {
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