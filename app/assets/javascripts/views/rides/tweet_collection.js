Goodrides.Views.Tweets = Backbone.View.extend({
  template: JST['rides/stuff'],

  initialize: function (options) {
    this.render();
  },

  render: function () {
    var renderedContent = this.template({
      twitters: this.model.attributes.tweets
    });
    this.$el.html(renderedContent);
    return this;
  }
});
