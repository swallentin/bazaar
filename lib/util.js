var url = require('url')
  , util = require('util');

var format = '%s%s';

var getFormat = function(protocol, type) {
    return util.format(format, protocol, type);
};

var setAppSetting = function(app, key, value) {
    app.set(key, value);
}

exports.setAppServiceSettings = function(app, serviceUrl) {
  var service = url.parse(serviceUrl);
    var protocol = service.protocol;

    setAppSetting(app, getFormat(protocol, 'hostname' ), service.hostname);
    setAppSetting(app, getFormat(protocol, 'port' ), service.port);
    setAppSetting(app, getFormat(protocol, 'path' ), service.path);

    var db,
        pass;

    if(service.auth) { 
        var auth = service.auth.split(':');
        db = auth[0];
        pass = auth[1];
    }

    setAppSetting(app, getFormat(protocol, 'user' ), db);
    setAppSetting(app, getFormat(protocol, 'pass' ), pass);
};