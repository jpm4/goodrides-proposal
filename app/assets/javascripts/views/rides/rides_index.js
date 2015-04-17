Goodrides.Views.RidesIndex = Backbone.CompositeView.extend({
  template: JST['rides/index'],

  className: 'rides-index',

  initialize: function (options) {
    this.missing = options["missing"];
    this.collectionName = options.collectionName;
    this.renderRidesCollection();
  },

  events: {
   'keyup :input' : 'search'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  search: function(e) {
    var value = this.$(".search").val();
    this.collection.fetch({
      data: {
        query: value
      }
    });
  },

  renderRidesCollection: function () {
    var view = new Goodrides.Views.RidesCollection({
      collection: this.collection,
      missing: this.missing,
      collectionName: this.collectionName
    });
    this.addSubview('.rides-collection', view);
  }
});
