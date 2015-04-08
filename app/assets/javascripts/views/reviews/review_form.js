Goodrides.Views.ReviewForm = Backbone.LinkFormView.extend({
  formTemplate: JST['lists/form'],
  linkTemplate: JST['lists/form_link'],

  create: function (event) {
    event.preventDefault();
    this.collection.create({
      ride_id: this.collection.ride.id,
      star_rating: this.$('textarea').val(),
      user_id: this.collection.user.id
    }, { wait: true });
    this.$('textarea').val('');
    this.$('textarea').focus();
  }
});
