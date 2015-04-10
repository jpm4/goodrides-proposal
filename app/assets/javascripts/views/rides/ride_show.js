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
      this.$("#starDisplay").rateYo({
        rating: rating,
        readOnly: true
      });
      rating = +rating.toFixed(2);
      this.$("#starDisplay").append('<h4>Average Rating: ' + rating + '</h4>');
    } 

//   .rateYo("option", "onChange", function () {
//    
//       var options = $rateYo.rateYo("option");
//    
//       var color = getColor(options);
//    
//       $rateYo.rateYo("option", "ratedFill", color);
//     }).rateYo("option", "onSet", function () {
//    
//       /* get all options of the plugin */
//       var options = $rateYo.rateYo("option");
//    
//       /* set the 'ratedFill' of the plugin dynamically */
//       $rateYo.rateYo("option", "ratedFill", getColor(options));
// }));
  },

  renderReviews: function () {
    this.model.reviews().each(this.addReview.bind(this));
  },


  renderReviewForm: function () {
    var view = new Goodrides.Views.ReviewForm({
      collection: this.collection
    });
    this.addSubview('#review-form', view);
    // this.initializeStarPlugin();
  }
});
