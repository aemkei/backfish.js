(function() {
  var undefined,
    isBrowser = typeof window != "undefined",
    _ = isBrowser ? window._ : require("underscore"), 
    Backbone = isBrowser ? window.Backbone : require("Backbone");

  var Backfish = Backbone.Model.extend({
    initialize: function(){
      
      var target = this,
        methods = _.functions(this);

      _.each(methods, function(method) { 
        var original = target[method];
        target[method] = function(){
          var value = original.apply(target, arguments);
          return value === undefined ? target : value;
        };
      });

      this.init && this.init.apply(this, arguments);
    }
  });

  this.Model = function(options){
    return Backfish.extend(options);
  };

  // make module Node.js compatible
  if (typeof module == "object") {
    module.exports = Model;
  }

})();