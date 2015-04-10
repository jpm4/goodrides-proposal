// ReviewSubview

initala : function () {

  var $rateYo = this.$("#rateYo").rateYo({
 
      ratedFill: getColor()
  }.rateYo("option", "onChange", function () {
 
    var options = $rateYo.rateYo("option");
 
    var color = getColor(options);
 
    $rateYo.rateYo("option", "ratedFill", color);
  }).rateYo("option", "onSet", function () {
 
    /* get all options of the plugin */
    var options = $rateYo.rateYo("option");
 
    /* set the 'ratedFill' of the plugin dynamically */
    $rateYo.rateYo("option", "ratedFill", getColor(options));
  });
});
},

render: function () {
  var content = this.template({ rating: new Models.Rating({ride: this.model})});
  this.$el.html(content);
  initializeStarPlugin();
}

might not need:
<!-- <%= javascript_include_tag 'jquery.rateyo' %> -->
