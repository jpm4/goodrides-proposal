Goodrides.Models.Ride = Backbone.Model.extend({
  urlRoot: 'api/rides',

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

    return response;
  }
});
