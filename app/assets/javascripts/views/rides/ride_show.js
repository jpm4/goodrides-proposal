Goodrides.Views.RideShow = Backbone.CompositeView.extend({
  template: JST['rides/show'],

  initialize: function () {
    this.collection = this.model.reviews();
    this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.model, 'change', this.render);
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
    this.initializeStarPlugin();
    return this;
  },

  averageStarRating: function () {
    var sum = 0;
    this.collection.models.forEach (function (review) {
      sum += review.attributes.star_rating;
    });
    return sum / this.collection.models.length;
  },

  initializeStarPlugin: function () {
    var rating;
    if (this.collection.models.length > 0) {
      rating = this.averageStarRating();
      this.$("#avgStarDisplay").rateYo({
        rating: rating,
        readOnly: true
      });
      rating = +rating.toFixed(2);
      this.$("#avgStarDisplay").append('<h4>Average Rating: ' + rating + '</h4>');
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
