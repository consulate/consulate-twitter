/**
 * Module dependencies
 */
var debug = require('simple-debug')('consulate-twitter')
  , passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

/**
 * Twitter Exchange Plugin
 */

module.exports = function(options, getUserByTwitterOrCreate) {
  if (!getUserByTwitterOrCreate) throw new Error('`getUserByTwitterOrCreate` callback required for `consulate-twitter`');

  var path = options.path || '/login/twitter';
  delete options.path;

  return function(app) {
    debug('registering twitter passport strategy with options', options);
    app.register(new TwitterStrategy(options, getUserByTwitterOrCreate));
    app.get(path, app.authenticate('twitter'), app.viewCallback('login'));
  };
};
