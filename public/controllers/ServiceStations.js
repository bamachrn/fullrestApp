var ssControllers = angular.module('ssControllers',[]);
ssControllers.controller('ssListCtrl',
    ['$scope','$http','locationService',
    function($scope,$http,locationService){
       
       $http.get('/ServiceStations').success(function(service_stations){
            $scope.service_stations = service_stations;
            var current_location={};
            locationService.currentLocation(current_location).then(function(current_location)
            {
                console.log(current_location.coords.latitude);
            });
        });
        
/*
        var currentLocation = function(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){
                    return position;
                });
            }
        }
        var updateLocation = function(service_stations)
        {
            var updated_service_stations = {};
            angular.forEach(service_stations,function(service_station){
                    var ssLocation =
                    {
                        'latitude':service_station.latitude,
                        'longitude':service_station.logitude
                    };
                    service_station.distance = locationService.getDistance(currentLocation().coords,
                                                ssLocation);
            });
        }
  */
        $scope.setSelected = function(idSelected)
        {       
            $scope.idSelected = idSelected;
        }
    }]);
ssControllers.controller('ssDetailsCtrl',
    ['$scope','$http','$routeParams',
    function($scope,$http,$routeParams){
        $http.get('/ServiceStations/'+$routeParams.ss_id).success(function(service_station){
            $scope.service_station=service_station;
        })
    }]);
