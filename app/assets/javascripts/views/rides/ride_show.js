Goodrides.Views.RideShow = Backbone.CompositeView.extend({
  template: JST['rides/show'],

  initialize: function () {
    this.collection = this.model.reviews();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addReview);
    this.listenTo(this.collection, 'remove', this.renderReviews);
    this.toggle = true;
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
    this.renderWantWidget();
    if (!this.model.attributes.reviewed) {
      this.renderReviewForm(false);
    } else {
      this.showUserStars();
    }
    this.averageStarDisplay();
    return this;
  },

  averageStarDisplay: function (newValue) {
    this.$("#avgStarDisplay").empty();

    var view = new Goodrides.Views.AverageStars({
      collection: this.collection,
      newValue: newValue
    });

    this.addSubview('#avgStarDisplay', view);
  },

  showUserStars: function (rating) {
    if (!rating) {
      var rating = this.model.attributes.user_rating;
    }
    this.$("#userStarDisplay").rateYo({
      rating: rating,
      ratedFill: "red",
      normalFill: "black",
      halfStar: true
    }).on("rateyo.set", function (e, data) {
      var review = this.collection.findWhere({
                   user_id: this.model.attributes.current_user
                   });
      review.save({ star_rating: data.rating });
      this.averageStarDisplay(data.rating);
      // this.collection.remove(review);

    }.bind(this));
    this.$("#userStarDisplay").append('<h4>Your Rating: ' + rating + '</h4>');
  },

  renderReviews: function () {
    this.$('#reviews').empty();
    this.model.reviews().each(this.addReview.bind(this));
  },

  renderReviewForm: function (skipStars) {
    var view = new Goodrides.Views.ReviewForm({
      collection: this.collection,
      rideShowView: this,
      skipStars: skipStars
    });
    this.addSubview('#review-form', view);
  },

  renderWantWidget: function () {
    var view = new Goodrides.Views.WantWidget({
      model: this.model
    });
    this.addSubview('#want-view', view);
  }
});
