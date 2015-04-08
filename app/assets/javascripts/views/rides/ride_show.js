Goodrides.Views.RideShow = Backbone.View.extend({
  template: JST['rides/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      ride: this.model
    });
    this.$el.html(content);
    return this;
  }
});
