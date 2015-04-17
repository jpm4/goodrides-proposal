Goodrides.Views.WantWidget = Backbone.View.extend({
  template: JST["rides/want_widget"],

  events: {
    "click" : "toggleWant"
  },

  initialize: function (options) {
    this.listenTo(this.model, 'change:num_wants', this.render);
  },

  toggleWant: function (event) {
    event.preventDefault();
    this.model.toggleWant();
  },

  render: function () {
    var fragment;
    if (this.model.attributes.num_wants === 1) {
      fragment = "person wants";
    } else {
      fragment = "people want";
    }
    var renderedContent = this.template({
      want: this.model.want(),
      ride: this.model,
      fragment: fragment
    });
    this.$el.html(renderedContent);
    return this;
  }
});
