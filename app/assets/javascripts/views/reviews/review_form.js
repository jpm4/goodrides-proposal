Goodrides.Views.ReviewForm = Backbone.CompositeView.extend({
  formTemplate: JST['reviews/form'],
  linkTemplate: JST['reviews/form_link'],
  formShowing: false,

  initialize: function () {
    debugger
    this.$('.rateYo').rateYo({
      rating: 3.5
    });
  },

  create: function (event) {
    event.preventDefault();
    this.collection.create({
      ride_id: this.collection.ride.id,
      star_rating: this.$('textarea').val()
    }, { wait: true });
    this.$('textarea').val('');
    this.$('textarea').focus();
  },

  events: {
    'click a' : 'showForm',
    'click .close' : 'hideForm',
    'submit' : 'create',
    'keydown textarea' : 'maybeCreate'
  },

  render: function () {
    var content;
    if (this.formShowing) {
      content = this.formTemplate();
    } else {
      content = this.linkTemplate();
    }

    this.$el.html(content);
    this.delegateEvents();
    return this;
  },

  hideForm: function () {
    this.formShowing = false;
    this.render();
  },

  maybeCreate: function (event) {
    if (event.keyCode === 13) {
      this.create(event);
    }
  },

  showForm: function (event) {
    event.preventDefault();
    this.formShowing = true;
    this.render();
  }

});
