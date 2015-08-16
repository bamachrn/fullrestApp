var LocationOperations = angular.module('locationOperations',[]);
LocationOperations.service('locationService',function($q){
    /**
     *getDistance function is used for getting the distance between two
     *geolocation point in KM. we used here Haversine algo to calculate 
     *distance. Here we have created a service and is being call from 
     *controller, as service is asynchronous we used $q  and promise based
     *architecture to get controller notified when it returns a value.
     * */
    this.getDistance = function(lat1,lon1,lat2,lon2){
        return $q(function(resolve,reject){
            var R = 6371; //this is for KM for meters multiply with 1000
            var dLat  = (lat1 - lat2).toRad();
            var dLong = (lon1 - lon2).toRad();
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad())*
                Math.sin(dLong/2) * Math.sin(dLong/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c ;
            resolve(d.toFixed(2));
        });
    }
  
    /**
     *currentLocation function is a service to give the current location of 
     *user, this is called from controller so, written in promised based fasion
     * **/
    this.currentLocation = function(){
        return $q(function(resolve,reject){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){
                    resolve(position);
                });
            }
            else
            {
                reject(0);
            }
        });
    }

    if (Number.prototype.toRad === undefined) {
            Number.prototype.toRad = function() { return this * Math.PI / 180; };
    }
});
