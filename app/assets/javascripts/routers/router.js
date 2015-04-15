Goodrides.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    this.$rootEl = $('#main');
    this.collection = new Goodrides.Collections.Rides();
  },

  routes: {
    '' : 'ridesIndex',
    'highest': 'highestRated',
    'rides' : 'ridesIndex',
    'rides/:id' : 'rideShow',
    'rated' : 'ratedIndex',
    'notrated' : 'notRatedIndex'
  },

  ridesIndex: function () {
    this.collection.fetch();
    var view = new Goodrides.Views.RidesIndex({
      collection: this.collection
    });

    this._swapView(view);
  },

  ratedIndex: function () {
    this.collection.fetch({ data: { rated: true }, processData: true });
    var view = new Goodrides.Views.RidesIndex({
      collection: this.collection
    });

    this._swapView(view);
  },

  notRatedIndex: function () {
    this.collection.fetch({ data: { not_rated: true }, processData: true });
    var view = new Goodrides.Views.RidesIndex({
      collection: this.collection
    });

    this._swapView(view);
  },

  highestRated: function () {
    this.collection.fetch({ data: { highest: true }, processData: true });
    var view = new Goodrides.Views.RidesIndex({
      collection: this.collection
    });

    this._swapView(view);
  },

  rideShow: function (id) {
    var ride = this.collection.getOrFetch(id);

    var view = new Goodrides.Views.RideShow({
      model: ride
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
