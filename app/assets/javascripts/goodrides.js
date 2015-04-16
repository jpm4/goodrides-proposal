window.Goodrides = {
  Mixins: {},
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Goodrides.Routers.Router;
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   Goodrides.initialize();
// });
