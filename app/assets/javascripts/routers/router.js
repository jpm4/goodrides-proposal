Goodrides.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    this.$rootEl = $('#main');
    this.collection = new Goodrides.Collections.Rides();
    this.collection.new = true;
  },

  routes: {
    '' : 'ridesIndex',
    'highest': 'highestRated',
    'rides' : 'ridesIndex',
    'rides/:id' : 'rideShow',
    'rated' : 'ratedIndex',
    'notrated' : 'notRatedIndex',
    'mostwanted' : 'mostWanted',
    'wants' : 'userWants'
  },

  ridesIndex: function () {
    this.collection.fetch({
      success: function() {
        this.collection.new = false;
      }.bind(this)
    });
    var view = new Goodrides.Views.RidesIndex({
      collection: this.collection,
      collectionName: "All Rides"
    });

    this._swapView(view);
  },

  ratedIndex: function () {
    this.collection.fetch({ data: { rated: true }, processData: true });
    var view = new Goodrides.Views.RidesIndex({
      collection: this.collection,
      missing: "You haven't rated any rides yet!",
      collectionName: "Rides You've Rated"
    });

    this._swapView(view);
  },

  notRatedIndex: function () {
    this.collection.fetch({ data: { not_rated: true }, processData: true });
    var view = new Goodrides.Views.RidesIndex({
      collection: this.collection,
      missing: "You have rated all rides in the database!",
      collectionName: "Rides You Haven't Rated"
    });

    this._swapView(view);
  },

  highestRated: function () {
    this.collection.fetch({ data: { highest: true }, processData: true });
    var view = new Goodrides.Views.RidesIndex({
      collection: this.collection,
      collectionName: "Top Rated Rides"
    });

    this._swapView(view);
  },

  mostWanted: function () {
    this.collection.fetch({ data: { most_wanted: true }, processData: true });
    var view = new Goodrides.Views.RidesIndex({
      collection: this.collection,
      collectionName: "Most Wanted Rides"
    });

    this._swapView(view);
  },

  userWants: function () {
    this.collection.fetch({ data: { user_wants: true }, processData: true });
    var view = new Goodrides.Views.RidesIndex({
      collection: this.collection,
      missing: "You haven't marked any rides as 'Want to ride'!",
      collectionName: "Your Wanted Rides"
    });

    this._swapView(view);
  },

  rideShow: function (id) {
    var ride = this.collection.getOrFetch(id);

    var view = new Goodrides.Views.RideShow({
      model: ride,
      ridesCollection: this.collection
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
