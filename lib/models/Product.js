var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  , ProductSchema = new Schema({
      'url': { type: String }
    , 'caption': { type: String }
    , 'description': { type: String }
    , 'currentPrice': {type: Number}
    , 'minPrice': { type: Number }
    , 'maxPrice': { type: Number }
    , 'minBid': { type: Number }
    , 'isSold': { type: Boolean, default: false }
  });

exports.Schema = ProductSchema;
exports.Model = mongoose.model('Product', ProductSchema);