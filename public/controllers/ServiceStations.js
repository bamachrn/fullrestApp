var ssControllers = angular.module('ssControllers',[]);
ssControllers.controller('ssListCtrl',
    ['$scope','$http',
    function($scope,$http){
       // console.log("hello world from Service Station controller");
            
        $http.get('/ServiceStations').success(function(service_stations){
            //console.log("got the data which is requested  :)  ");
            $scope.service_stations = service_stations; 
        });
        
    }]);
ssControllers.controller('ssDetailsCtrl',
    ['$scope','$http','$routeParams',
    function($scope,$http,$routeParams){
        $http.get('/ServiceStations/'+$routeParams.ss_id).success(function(service_station){
            $scope.service_station=service_station;
        })
    }]);
