Goodrides.Views.RidesIndex = Backbone.CompositeView.extend({
  template: JST['rides/index'],

  className: 'rides-index',

  initialize: function (options) {
    this.missing = options["missing"];
    this.renderRidesCollection();
  },

  events: {
   'keyup :input' : 'search'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    this.addMiniStars();
    return this;
  },

  search: function(e) {
    var value = this.$(".search").val();
    // debugger
    this.collection.fetch({
      data: {
        query: value
      }
    });
    // console.log(e.type, e.keyCode);
    // console.log(this.$(".search").val());
  },

  renderRidesCollection: function () {
    var view = new Goodrides.Views.RidesCollection({
      collection: this.collection,
      missing: this.missing
    });
    this.addSubview('.rides-collection', view);
  },

  // renderSearchForm: function () {
  //   var view = new Goodrides.Views.RidesSearch({
  //     collection: this.collection,
  //     ridesIndexView: this
  //   });
  //   this.addSubview('#search-form', view);
  // },

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
