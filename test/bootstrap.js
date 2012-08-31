var conf = require('../config')
  , mongoose = require("mongoose")
  , Product = require('../lib/models/product').Model;

mongoose.connect(conf.mongodb);

var data = [
    {
        "url": "IMG_1802.jpg",
        "caption": "Bathroom scale",
        "description": "A lovely artifact purchased from Carrefour.",
        "currentPrice": 20,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1803.jpg",
        "caption": "Drying rack",
        "description": "Another gem from Carrefour. Yours for less then cheap!",
        "currentPrice": 10,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {   
        "url": "IMG_1804.jpg",
        "caption": "IKEA NYFORS Table lamp",
        "description": "Can be found for ¥399 at IKEA.",
        "currentPrice": 100,
        "minBid": 10,
        "maxPrice": 200,
        "currency": "CNY"
    },
    {   
        "url": "IMG_1805.jpg",
        "caption": "IKEA NYFORS Table lamp",
        "description": "Can be found for ¥399 at IKEA.",
        "currentPrice": 100,
        "minBid": 10,
        "maxPrice": 200,
        "currency": "CNY"
    },
    {
        "url": "IMG_1806.jpg",
        "caption": "IKEA Bed Matress 180x200",
        "description": "A special foam matress that that will turn your bed so comfortable you'll feel like a persian prince in among his 199 wifes, being feed grapes and fine wine.",
        "currentPrice": 400,
        "minBid": 25,
        "maxPrice": 800,
        "currency": "CNY"
    },
    {
        "url": "IMG_1808.jpg",
        "caption": "Kata DPS 3-1 Camera Bag",
        "description": "An awesome camera that let's you carry a DSLR house, a ton of lenses and still have room for an iPad or in Air",
        "currentPrice": 300,
        "minBid": 25,
        "maxPrice": 500,
        "currency": "CNY"
    },
    {
        "url": "IMG_1809.jpg",
        "caption": "IKEA Floor lamp",
        "description": "Cheap original",
        "currentPrice": 50,
        "minBid": 20,
        "maxPrice": 150,
        "currency": "CNY"
    },
    {
        "url": "IMG_1810.jpg",
        "caption": "IKEA Coat Hanger",
        "description": "Let's you store 11 scarfs, 9 jackets, 4 pair of gloves, 3 hats and an umbrella.",
        "currentPrice": 50,
        "minBid": 10,
        "maxPrice": 150,
        "currency": "CNY"
    },
    {
        "url": "IMG_1811.jpg",
        "caption": "IKEA PS Sofa-bed including pillows and cover",
        "description": "Small, easy to use and light-weight. Perfect for your guests or un-expected house guests. This also includes a blankett, bed cloth and pillows all from IKEA.",
        "currentPrice": 400,
        "minBid": 50,
        "maxPrice": 800,
        "currency": "CNY"
    },
    {
        "url": "IMG_1812.jpg",
        "caption": "IKEA Desk and Char",
        "description": "A minimalistic working-place.",
        "currentPrice": 200,
        "minBid": 50,
        "maxPrice": 500,
        "currency": "CNY"
    },
    {
        "url": "IMG_1815.jpg",
        "caption": "Panasonic Vacuum Cleaner",
        "description": "Wroom wrooom, makes apartment clean. Effort not included.",
        "currentPrice": 50,
        "minBid": 25,
        "maxPrice": 150,
        "currency": "CNY"
    },
    {
        "url": "IMG_1816.jpg",
        "caption": "Iron",
        "description": "Ion like a lion in zion. Mini Iron Deck included. See next picture",
        "currentPrice": 50,
        "minBid": 10,
        "maxPrice": 150,
        "currency": "CNY"
    },
    {
        "url": "IMG_1817.jpg",
        "caption": "Mini Ironing Deks",
        "description": "Included when purchasing the iron.",
        "currentPrice": 0,
        "minBid": 0,
        "maxPrice": 0,
        "currency": "CNY"
    },
    {
        "url": "IMG_1818.jpg",
        "caption": "Assortment of cleaning products including container",
        "description": "Box with everything you need to keep it clean.",
        "currentPrice": 10,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1819.jpg",
        "caption": "Over",
        "description": "This trustworthy applicance will add a new dimension to your cooking.",
        "currentPrice": 150,
        "minBid": 10,
        "maxPrice": 250,
        "currency": "CNY"
    },
    {
        "url": "IMG_1820.jpg",
        "caption": "A photo",
        "description": "This is a product, bla bla bla",
        "currentPrice": 0,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1821.jpg",
        "caption": "Toaster",
        "description": "Faitfull toaster that always works.",
        "currentPrice": 50,
        "minBid": 10,
        "maxPrice": 100,
        "currency": "CNY"
    },
    {
        "url": "IMG_1822.jpg",
        "caption": "Water boiling thing",
        "description": "For all your tea needs.",
        "currentPrice": 50,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1823.jpg",
        "caption": "Mixer",
        "description": "Shakes, smoothies, soups. You name it, it can make it happen. No, not really but you get the gist.",
        "currentPrice": 50,
        "minBid": 10,
        "maxPrice": 150,
        "currency": "CNY"
    },
    {
        "url": "IMG_1824.jpg",
        "caption": "French press",
        "description": "An object I'm reluctant to separate from. Save you self a bit of money, this thing goes for ¥ 600 something in french concession.",
        "currentPrice": 150,
        "minBid": 10,
        "maxPrice": 300,
        "currency": "CNY"
    },
    {
        "url": "IMG_1826.jpg",
        "caption": "An Assortment of cups, mugs and glasses.",
        "description": "Some are design stuff other from IKEA. You get it all!",
        "currentPrice": 50,
        "minBid": 10,
        "maxPrice": 100,
        "currency": "CNY"
    },
    {
        "url": "IMG_1827.jpg",
        "caption": "A photo",
        "description": "This is a product, bla bla bla",
        "currentPrice": 0,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1828.jpg",
        "caption": "A photo",
        "description": "This is a product, bla bla bla",
        "currentPrice": 0,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1829.jpg",
        "caption": "A photo",
        "description": "This is a product, bla bla bla",
        "currentPrice": 0,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1830.jpg",
        "caption": "A photo",
        "description": "This is a product, bla bla bla",
        "currentPrice": 0,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1831.jpg",
        "caption": "A photo",
        "description": "This is a product, bla bla bla",
        "currentPrice": 0,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1832.jpg",
        "caption": "A photo",
        "description": "This is a product, bla bla bla",
        "currentPrice": 0,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1833.jpg",
        "caption": "A photo",
        "description": "This is a product, bla bla bla",
        "currentPrice": 0,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1834.jpg",
        "caption": "A photo",
        "description": "This is a product, bla bla bla",
        "currentPrice": 0,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    },
    {
        "url": "IMG_1835.jpg",
        "caption": "A photo",
        "description": "This is a product, bla bla bla",
        "currentPrice": 0,
        "minBid": 10,
        "maxPrice": 50,
        "currency": "CNY"
    }
];

data.forEach( function(item, index) {
    var product = new Product(item);
    product.save(function(err, doc) {
        console.log("saved: ", index);
        if( index == data.length-1) {
            mongoose.disconnect();
        }
    });
});