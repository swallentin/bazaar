module.exports = {
    mongodb: process.env.MONGOHQ_URL || 'mongodb://local.dev/bazaar'
  , redis: process.env.REDISTOGO_URL || 'redis://local.dev/bazaar'
  , appUrl: process.env.APP_URL || 'http://local.dev:3000'
  , fb: {
        appId: process.env.FB_APPID || '297348623622954'
      , appSecret: process.env.FB_APPSECRET || 'daa93e282fa734af9045b2ca9d0461eb'
    }
  , page: {
    project: "Wallenbergs Bazaar"
  }
};

