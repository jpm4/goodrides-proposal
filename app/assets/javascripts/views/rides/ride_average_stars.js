Goodrides.Views.AverageStars = Backbone.CompositeView.extend({
  template: JST['rides/average_stars'],

  initialize: function(options) {
    this.model = options.model;
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.averageStarDisplay();
    return this;
  },

  averageStarDisplay: function () {
    var el = this.$("#avgStarDisplay");
    var rating = this.model.attributes.average_rating;
    this.$(el).rateYo({
      rating: rating,
      readOnly: true,
      ratedFill: "gold"
    });

    if (rating > 0) {
      rating = +rating.toFixed(2);
    }

    this.$(el).append('<h4>Average Rating: ' + rating + '</h4>');
  }
});
