window.Goodrides = {
  Mixins: {},
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new Goodrides.Routers.Router;

    router.on('route', function() {
      $(document).scrollTop(0);
    });

    Backbone.history.start();
  }
};
