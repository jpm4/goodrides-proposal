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
    this.addStarsAndWants();
    return this;
  },

  addStarsAndWants: function () {
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
      var wantWidget = new Goodrides.Views.WantWidget({
        model: ride
      });
      this.addSubview("#want-button-" + ride.id, wantWidget);
    }.bind(this));


  }
});
