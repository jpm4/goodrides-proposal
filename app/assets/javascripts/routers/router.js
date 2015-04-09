Goodrides.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    this.$rootEl = $('#main');
    this.collection = new Goodrides.Collections.Rides();
  },

  routes: {
    '' : 'ridesIndex',
    'rides' : 'ridesIndex',
    'rides/:id' : 'rideShow'
  },

  ridesIndex: function () {
    this.collection.fetch();
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
