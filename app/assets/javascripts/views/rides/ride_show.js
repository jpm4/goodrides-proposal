Goodrides.Views.RideShow = Backbone.CompositeView.extend({
  template: JST['rides/show'],

  initialize: function () {
    this.collection = this.model.reviews();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addReview);
    // TODO: Put two functions in the callback above, including the edit function?
  },

  renderOnRatingSubmit: function () {
    this.addReview();
    this.render();
  },

  addReview: function (review) {
    var view = new Goodrides.Views.ReviewShow({
      model: review
    });
    this.addSubview('#reviews', view);
  },

  render: function () {
    var content = this.template({
      ride: this.model
    });
    this.$el.html(content);
    this.renderReviews();
    if (!this.model.attributes.reviewed) {
      this.renderReviewForm();
    } else {
      this.showUserStars();
    }
    this.averageStarDisplay();
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
    var el = "#avgStarDisplay";
    var rating;
    if (newValue) {
      count += 1;
      this.$(el).remove();
      el = "#newAvgStarDisplay";
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
  },

  showUserStars: function (rating) {
    if (!rating) {
      var rating = this.model.attributes.user_rating;
    }
    this.$("#userStarDisplay").rateYo({
      rating: rating,
      readOnly: true,
      ratedFill: "red",
      normalFill: "black"
    });
    this.$("#userStarDisplay").append('<h4>Your Rating: ' + rating + '</h4>');
  },

  renderReviews: function () {
    this.model.reviews().each(this.addReview.bind(this));
  },

  renderReviewForm: function () {
    var view = new Goodrides.Views.ReviewForm({
      collection: this.collection,
      rideShowView: this
    });
    this.addSubview('#review-form', view);
  }
});
