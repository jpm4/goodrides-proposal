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

  parse: function (payload) {
    if (payload.reviews) {
      this.reviews().set(payload.reviews, { parse: true });
      delete payload.reviews;
    }
    this.parseWant(payload);
    return payload;
  }
})
);
