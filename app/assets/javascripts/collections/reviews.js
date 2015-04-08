Goodrides.Collections.Reviews = Backbone.Collection.extend({
  model: Goodrides.Models.Review,
  url: 'api/reviews',

  initialize: function (models, options) {
    this.ride = options.ride;
  }
});
