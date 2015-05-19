Goodrides.Collections.Tweets = Backbone.Collection.extend({
  model: Tweet,

  // placeholder search value

  url: 'https://api.twitter.com/1.1/search/tweets.json?q=%40#mrtoad',

  parse: function(response) {
    return response.results;
  }
});
