Goodrides.Views.AverageStars = Backbone.CompositeView.extend({
  template: JST['rides/average_stars'],

  initialize: function(options) {
    this.collection = options.collection;
    this.newValue = options.newValue;
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.averageStarDisplay(this.newValue);
    return this;
  },

  averageStarRating: function (newValue, count) {
    var sum = 0;
    if (newValue) {
      sum += newValue;
    }
    this.collection.models.forEach (function (review) {
      sum += review.attributes.star_rating;
    });
    return sum / count;
  },

  averageStarDisplay: function (newValue) {
    var count = this.collection.models.length;
    var el = this.$("#avgStarDisplay");
    var rating;
    if (newValue) {
      count += 1;
    }
    if (count > 0) {
      rating = this.averageStarRating(newValue, count);

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

    // debugger
  }
});
