var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  , ProductSchema = new Schema({
      'url': { type: String }
    , 'index': { type: Number, default: 100}
    , 'caption': { type: String }
    , 'description': { type: String }
    , 'currentPrice': {type: Number}
    , 'minPrice': { type: Number }
    , 'maxPrice': { type: Number }
    , 'minBid': { type: Number }
    , 'isSold': { type: Boolean, default: false }
    , 'lastBidder': { type: String }
  });

exports.Schema = ProductSchema;
exports.Model = mongoose.model('Product', ProductSchema);