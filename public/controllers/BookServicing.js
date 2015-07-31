var bsControllers = angular.module('bsControllers',[]);
bsControllers.controller('bsInputCtrl',
    ['$scope','$http',
    function($scope,$http){
              
        $http.get('/ServiceBookings').success(function(service_bookings){
            //console.log("got the data for service stations")
            $scope.service_bookings = service_bookings; 
        });
        $scope.setSelected = function(idSelected)
        {       
            $scope.idSelected = idSelected;
            /*if($scope.idSelected)
                $scope.idSelected = false;
            else
                $scope.idSelected = true;*/
        }
        $scope.
    }]);
ssControllers.controller('ssDetailsCtrl',
    ['$scope','$http','$routeParams',
    function($scope,$http,$routeParams){
        $http.get('/ServiceStations/'+$routeParams.ss_id).success(function(service_station){
            $scope.service_station=service_station;
        })
    }]);
