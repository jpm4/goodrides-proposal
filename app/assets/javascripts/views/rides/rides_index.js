Goodrides.Views.RidesIndex = Backbone.View.extend({
  template: JST['rides/index'],

  className: 'rides-index',

  initialize: function (options) {
    this.missing = options["missing"],
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      rides: this.collection,
      missing: this.missing
    });

    this.$el.html(content);
    this.addMiniStars();
    return this;
  },

  addMiniStars: function () {
    this.collection.models.forEach (function(ride) {
      var attrs = ride.attributes;
      var rating = attrs.average_rating;
      var id = attrs.id;
      this.$("#rateYo-mini-" + id).rateYo({
        rating: rating,
        readOnly: true,
        starWidth: "12px",
        ratedFill: "black",
        normalFill: "silver"
      });
    }.bind(this));
  }
});
