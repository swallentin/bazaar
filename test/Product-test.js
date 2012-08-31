var vows = require('vows')
  , assert = require('assert')
  , conf = require('../config')
  , mongoose = require("mongoose")
  , Product = require('../lib/models/product').Model;

mongoose.connect(conf.mongodb);

vows.describe("Array")
  .addBatch({
    "An array": {
      "with 3 elements": {
        topic: [1,2,3],
        "has a length of 3": function(topic) {
          assert.equal(topic.length, 3);
        }
      },
      "with zero elements": {
        topic: [],
        "has a length of 0": function(topic) {
          assert.equal(topic.length, 0);
        },
        "returns *undefined, when 'pop()'ed": function(topic) {
          assert.isUndefined(topic.pop());
        }
      }
    }
  })
  .addBatch({
    "saving an item without _id": {
      topic: function() {
        var product = new Product({
          "url": "IMG_1802.jpg",
          "caption": "Bathroom scale",
          "description": "A lovely artifact purchased from Carrefour.",
          "currentPrice": 20,
          "minBid": 10,
          "currency": "CNY"
        });
        product.save(this.callback)
      },
      "after product.save": function(err, doc) {
        assert.isNull(err);
        assert.isObject(doc);
        assert.isDefined(doc._id);
      }
    }
  })
  .export(module);