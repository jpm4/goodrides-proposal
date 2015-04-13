Goodrides.Collections.Reviews = Backbone.Collection.extend({
  model: Goodrides.Models.Review,
  url: 'api/reviews',

  comparator: function(m) {
    return Date.parse(m.get('updated_at'));
  },

  initialize: function (models, options) {
    this.ride = options.ride;
  }
});
