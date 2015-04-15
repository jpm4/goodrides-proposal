Goodrides.Views.RidesIndex = Backbone.View.extend({
  template: JST['rides/index'],

  className: 'rides-index',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      rides: this.collection,

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
