Goodrides.Views.RideShow = Backbone.CompositeView.extend({
  template: JST['rides/show'],

  initialize: function () {
    this.collection = this.model.reviews();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addReview);
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
    this.renderReviewForm();
    return this;
  },

  renderReviews: function () {
    this.model.reviews().each(this.addReview.bind(this));
  },

  renderReviewForm: function () {
    var view = new Goodrides.Views.ReviewForm({
      collection: this.collection
    });
    debugger
    this.addSubview('#review-form', view);
  }
});
