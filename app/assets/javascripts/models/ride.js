Goodrides.Models.Ride = Backbone.Model.extend(
  _.extend({}, Goodrides.Mixins.Wantable, {
  urlRoot: 'api/rides',

  wantableOptions: {
    foreignKey: "ride_id"
  },

  reviews: function () {
    if (!this._reviews) {
      this._reviews = new Goodrides.Collections.Reviews([], { ride: this });
    }

    return this._reviews;
  },

  parse: function (response) {
    if (response.reviews) {
      this.reviews().set(response.reviews, { parse: true });
      delete response.reviews;
    }
    this.parseWant(response);
    return response;
  }
})
);
