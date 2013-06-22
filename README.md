consulate-twitter
==================

Twitter exchange plugin for [consulate](https://github.com/consulate/consulate).

`consulate-twitter` allows users to login/register with Twitter and exchange
a Twitter access_token for a consulate authorization code.

Usage
-----

Just register `consulate-twitter` as a plugin with your [consulate](https://github.com/consulate/consulate) server:

```js
var consulate = require('consulate')
  , twitter = require('consulate-twitter');

var app = consulate();

app.plugin(twitter({
  consumerKey: 'MY_TWITTER_CONSUMER_KEY',
  consumerSecret: 'MY_TWITTER_CONSUMER_SECRET',
  callbackURL: 'MY_TWITTER_CALLBACK_URL'
}, function(accessToken, refreshToken, profile, done) {

  // lookup user by twitter id here. if they don't exist create them
  ...

  // Return the user for your consulate system
  done(null, myUser);
}));
```

Tests
-----

```sh
$ npm test
```
