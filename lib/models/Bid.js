var mongoose = require('mongoose')
  , Product = require('./Product').Model
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  , ProductSchema = new Schema({
      'product': { type: Product}
      'amount': { type: Number }
    , 'user': { type: String }
  });

exports.Schema = ProductSchema;
exports.Model = mongoose.model('Product', ProductSchema);