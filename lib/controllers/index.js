var Product = require('../models/product').Model;

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.admin = function(req, res){
  Product.find( {}, function(err, docs) {
    console.log(docs);
    res.render('admin', { 
      title: 'Express',
      products: docs 
    });
  });
};


exports.products = function(req, res) {
  Product.find({}, function(err, data) {
      
      if(err)
        res.json(500, {message:"problems"});
      else
        res.json(data);
  });
};

exports.bid = function(req, res) {

  var action = req.body.action || "bid";

  Product.findOne({ _id: req.params.id }, function(err, product) {
    if( err ) {
      res.send({ message: err.toString() });
      return;
    }

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
    product.save( function( err, doc ) {
      res.send(doc);
    });
  });
};