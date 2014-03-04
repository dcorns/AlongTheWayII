(function(NS){

  NS.routeObject = {};

  NS.getRoute = function(routeRequestObject){
    var callback = function(result){
      NS.routeObject  = result;
      //alert('got the route');
    };

    window.pathGen.calcRoute(routeRequestObject, callback);
  };

  NS.getPlaces = function(placesRequestObject){
    window.places_gen.getPlaces(NS.routeObject.queryPoints, placesRequestObject);
  };

})(window.controller = window.controller || {});