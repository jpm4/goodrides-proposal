Goodrides.Views.ReviewForm = Backbone.CompositeView.extend({
  formTemplate: JST['reviews/form'],
  linkTemplate: JST['reviews/form_link'],
  starTemplate: JST['reviews/stars'],
  formShowing: false,

  setStarRating: function (rating) {
    this.collection.create({
      ride_id: this.collection.ride.id,
      star_rating: rating
    });
  },

  // addBody: function (event) {
  //   event.preventDefault();
  // },

  create: function (event) {
    event.preventDefault();
    this.collection.create({
      ride_id: this.collection.ride.id,
      star_rating: this.rating,
      body: $('textarea').val()
    }, { wait: true });
    this.$('textarea').val('');
    this.$('textarea').focus();
  },
// TODO: make initial create action that creates a review with
// star_rating, then make the above function into more of an "edit"
// method that appends to the existing review
  events: {
    'click a' : 'showForm',
    'click .close' : 'hideForm',
    'submit' : 'create',
    'keydown textarea' : 'maybeCreate'
  },

  initializeStarPlugin: function () {
    this.$("#rateYo").rateYo({
      halfStar: true
    }).on("rateyo.set", function (e, data) {
      this.rating = data.rating;
      this.showForm();
    }.bind(this));
  },

  render: function () {
    var content;
    if (this.formShowing) {
      content = this.formTemplate();
    } else {
      content = this.linkTemplate();
    }
    this.$el.html(content);
    this.initializeStarPlugin();
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
    if (event) {
      event.preventDefault();
    }
    this.formShowing = true;
    this.render();
  }
});
