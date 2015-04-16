Goodrides.Views.RidesCollection = Backbone.CompositeView.extend({
  template: JST['rides/collection'],

  initialize: function (options) {
    this.missing = options["missing"];
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      rides: this.collection,
      missing: this.missing
    });

    this.$el.html(content);
    return this;
  }
});
