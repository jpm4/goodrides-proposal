Goodrides.Views.ReviewShow = Backbone.CompositeView.extend({
  template: JST['reviews/show'],

  className: 'review-display',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    // this.model.on('change', this.tester, this);
  },

  // tester: function () {
  //   this.model.fetch( {
  //     success: this.render.bind(this)
  //   });
  // },

  render: function () {
    var content = this.template({
      review: this.model
    });
    this.$el.html(content);
    this.$el.data('review-id', this.model.id);
    this.initializeStarPlugin();
    return this;
  },

  initializeStarPlugin: function () {
    var rating = this.model.attributes.star_rating;
    this.$(".review-star-rating").rateYo({
      rating: rating,
      readOnly: true
    });

    this.$(".review-star-rating").append('<h4>Rating: ' + rating + '</h4>');
  }


});
