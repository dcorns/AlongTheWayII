Along-The-Way codefellows project app

- all ? variables are optional with (default) values

googleMaps.js - initializes and exposes the Google Maps API
  - googleMaps.initialize(?lat(47.624), ?lng(237.664), ?zoom(12), ?type(google.maps.MapTypeId.ROADMAP))
  - googleMaps.map - assumes map element id = 'map'
  - googleMaps.directionsService
  - googleMaps.directionsRenderer - assumes panel element id = 'directions-panel'
  - googleMaps.placesService
  - googleMaps.routeBoxer
  - googleMaps.infoWindow

pathgen.js - generates an array of LatLng data pulled from Google Maps Directions
  - pathGen.calcRoute(callback, start, end, ?pointDist(10000), ?mode(google.maps.TravelMode.DRIVING))
    - -callback - callback function that receives the LatLng array
    - -start - either LatLng coords or a place name that Google can parse
    - -end - either LatLng coords or a place name that Google can parse
    - -pointDist - the desired spacing between data points in meters
    - -mode - which map mode should be used to generated the directions path

places_gen.js - Returns Places details of search hits along the path, using the RouterBox API. Also 
  creates markers for these places.
  - places_gen.initialize() - import of googleMaps.js to use global maps libraries.
  - places_gen.route() - generate the lat long points along the route - this method will be removed
    and pathgen.calcRoute will be used in its place.
  - places_gen.drawBoxes() - visual overlay of calculated routeBox used for places search
  - places_gen.clearBoxes() - clears boxes generated by drawBoxes()
  - places_gen.showPlaces() - mixed controller method used to retrieve details about a place using
    reference parameter $.search - the module array. This can be refactored to use on the controller.
  - places_gen.showPlaces.trigger() - temporary helper method for executing on promise return
  - $.search (boxes)
    - boxes are the caculated returned boxes using directionsService.route callback.
    This method does a radarSeach for each of the bounding boxes, returning an array of reference 
    parameters that are used in retrieving place details. This call is asynchronous with multiple
    results appended to the module array (place_results)
  - createMarker(reference) - takes a reference parameter, generates a marker and click handler for 
    for a place, will generate directions from original input point and append to DOM.

