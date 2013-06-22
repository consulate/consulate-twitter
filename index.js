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

  debug('registering twitter passport strategy with options', options)

  passport.use(new TwitterStrategy(options, getUserByTwitterOrCreate));

  return function(app) {
    app.get(path, app.authenticate('twitter'), app.viewCallback('login'));
  };
};
