Goodrides.Models.RideSearch = Backbone.Model.extend({
  defaults: {
    what: ""
  },

  initialize: function(options) {
    this.collection = options.collection;
    this.filtered = new Backbone.Collection(options.collection.models);
    this.on("change:what", this.filter);
  },

  filter: function() {
    var what = this.get('what').trim();
    var models;

    if (what==="") {
      models = this.collection.models;
    } else {
      models = this.collection.filter(function(model) {
        return _.some(_.values(model), function(value) {
          return ~value.toLowerCase().indexOf(what);
        });
      });
    }

    this.filtered.reset(models);
  }
});
