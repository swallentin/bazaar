module.exports = {
    mongodb: process.env.MONGOHQ_URL || 'mongodb://local.dev/bazaar'
  , redis: process.env.REDISTOGO_URL || 'redis://local.dev/bazaar'
  , appUrl: process.env.APP_URL || 'http://local.dev:3000'
  , fb: {
        appId: process.env.FB_APPID || '297348623622954'
      , appSecret: process.env.FB_APPSECRET || 'daa93e282fa734af9045b2ca9d0461eb'
    }
  , page: {
    project: "Wallenbergs Bazaar",
    instructions: "<p>We've deciced to move back to Stockholm, Sweden and as such we need to give up some of our belonings.</p><p>Buying is as easy as </p><ul><li>Register/Login via the 'Login via Facebook button'</li><li>Locate something you interested in</li><li>Click 'Buy for ¥X'</li><li>You will now be presented with instructions on how to collect the item you purchased!</li></ul><h2>Happy shopping!</h2>"
  }
};

