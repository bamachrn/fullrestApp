var ssControllers = angular.module('serviceStationControllers',[]);
ssControllers.controller('ssListCtrl',
    ['$scope','$http','locationService','$location',
    function($scope,$http,locationService,$location){
      
        /**
         *For getting the service station details in search we need to get
         *distance of each of the service stations in km from the location
         *of the user accessing to search the service stations
         * */
       $http.get('/ServiceStations').success(function(service_stations){
           var UPDATE_DISTANCE=1;
            getCurrentLocation(service_stations,UPDATE_DISTANCE);
        });
       
       /**
        *this function is used for getting the current locaiton of the user
        *and updating it to $scope.current location
        *this is accessed from a service as locationOperations
        * */
       var getCurrentLocation = function(service_stations,UPDATE_DISTANCE){
            var current_location={};
            locationService.currentLocation().then(function(current_location)
            {
                $scope.current_location = current_location.coords;
                
                if(UPDATE_DISTANCE===1){
                    updateDistance(service_stations);
                }
            })
            .catch(function(error)
            {
                console.log("Error: could not retrieve current location\n "+error);
            });
        
       }
       
       /**
        *this function is used for updating distance of each service station
        *from the current user accessing the system. distance is calculated 
        *in KM using one service locationOperations.we are updating each of
        *the service stations and updating $scope variable.
        *
        *TODO: if the number of service stations are large then need to find 
        * out a way to gradually update the service stations as visible to user
        * otherwise it will take a long time to load.
        * */
       var updateDistance = function(service_stations)
        {
            $scope.service_stations = [];
            angular.forEach(service_stations,function(service_station){
            
                var curLoc = $scope.current_location;
                locationService.getDistance(curLoc.latitude,curLoc.longitude,
                    service_station.latitude,service_station.longitude)
                    .then(function(distance){
                        service_station.distance = distance;
                        $scope.service_stations.push(service_station);
                    });
            });
        }
        
       //this function is used for expanding the detailed view of a selected service
       //station, when show more is clicked
        $scope.setSelected = function(idSelected)
        {       
            $scope.idSelected = idSelected;
        }

        //redirect to bookservicing page with choosen service station id
        $scope.gotoBookService = function(ss_id){
            $location.url('/BookService/'+ss_id);
        }
    }]);
ssControllers.controller('ssDetailsCtrl',
    ['$scope','$http','$routeParams',
    function($scope,$http,$routeParams){
        $http.get('/ServiceStations/'+$routeParams.ss_id).success(function(service_station){
            $scope.service_station=service_station;
        })
    }]);
