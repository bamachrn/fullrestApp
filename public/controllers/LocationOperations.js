var LocationOperations = angular.module('locationOperations',[]);
LocationOperations.service('locationService',function(){
    this.getDistance = function(p1,p2){
    // Distance in kilometers between two points using the Haversine algo.
        var R = 6371;
        var dLat  = (p2.latitude - p1.latitude).toRadians();
        var dLong = (p2.longitude - p1.longitude).toRadians();
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos((p1.latitude).toRadians()) * Math.cos((p2.latitude).toRadians) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c ;
        return Math.round(d);
    }
   
    this.currentLocation = function(current_location){
        return $q(function(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){
                    console.log("I am getting current location");
                    current_location=position;
                });
            }
        });
    }

    if (Number.prototype.toRadians === undefined) {
            Number.prototype.toRadians = function() { return this * Math.PI / 180; };
    }
});
