Goodrides.Views.RidesIndex = Backbone.View.extend({
  template: JST['rides/index'],

  className: 'rides-index',

  initialize: function (options) {
    this.missing = options["missing"],
    this.listenTo(this.collection, 'sync', this.render);
  },

  events: {
   'keyup :input' : 'search'
  },

  search: function(e) {
    var value = this.$(".search").val()
    this.collection.fetch({
      data: {
        query: value
      }
    })
    // console.log(e.type, e.keyCode);
    // console.log(this.$(".search").val());
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
        starWidth: "14px",
        ratedFill: "black",
        normalFill: "silver"
      });
    }.bind(this));
  }
});
