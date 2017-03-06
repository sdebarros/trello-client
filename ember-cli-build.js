/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: ['API_KEY', 'USER_TOKEN']
    },
    'esw-cache-fallback': {
      // RegExp patterns specifying which URLs to cache.
      patterns: [
        '*',
        'https://api.trello.com/1/(.+)'
      ],

      // changing this version number will bust the cache
      version: '1'
    }
  });

  return app.toTree();
};
