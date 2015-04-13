Goodrides.Collections.Rides = Backbone.Collection.extend({
  model: Goodrides.Models.Ride,

  url: 'api/rides',

  comparator: 'name',

  getOrFetch: function (id) {
    var ride = this.get(id);

    if (!ride) {
      ride = new Goodrides.Models.Ride({ id: id });
      ride.fetch({
        success: function () {
          this.add(ride);
        }.bind(this)
      });
    } else {
      ride.fetch();
    }

    return ride;
  }


});
