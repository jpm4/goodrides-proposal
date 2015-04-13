Goodrides.Views.RidesCollection = Backbone.CompositeView.extend({
  template: JST['rides/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      rides: this.collection
    });

    this.$el.html(content);
    return this;
  }
});
