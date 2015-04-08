Goodrides.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    this.$rootEl = $('#main');
  },

  routes: {
    '' : 'ridesIndex',
    'rides/:id' : 'rideShow'
  },

  ridesIndex: function () {
    Goodrides.Collections.rides.fetch();

    var view = new Goodrides.Views.RidesIndex({
      collection: Goodrides.Collections.rides
    });

    this._swapView(view);
  },

  rideShow: function (id) {
    var ride = Goodrides.Collections.rides.getOrFetch(id);

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
