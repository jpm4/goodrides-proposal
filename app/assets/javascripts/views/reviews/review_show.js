Goodrides.Views.RideShow = Backbone.CompositeView.extend({
  template: JST['reviews/show'],

  className: 'review-display',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      review: this.model
    });
    this.$el.html(content);
    this.$el.data('review-id', this.model.id);

    return this;
  }
});
