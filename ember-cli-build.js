/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: ['API_KEY', 'USER_TOKEN']
    }
  });

  return app.toTree();
};
