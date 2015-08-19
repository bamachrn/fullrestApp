var bsControllers = angular.module('bsControllers',[]);
bsControllers.controller('bsInputCtrl',
    ['$scope','$http','$routeParams',
    function($scope,$http,$routeParams){
       
       if($routeParams.ss_id === undefined)
        {
            console.log("not selecting a id");
            $http.get('/ServiceStations').success(function(service_stations){
                //console.log("got the data for service stations")
                $scope.service_stations = service_stations; 
                $scope.booking_ss=service_stations[0];
            });
        }
        else
        {  
            console.log("========="+$routeParams.ss_id+"====comming to select with ID");
            $http.get('/ServiceStations/'+$routeParams.ss_id).success(function(service_station){
                $scope.service_stations = [];
                $scope.service_stations.push(service_station);
                //console.log("Got ss_id: "+service_station.ss_id);
                $scope.selectedSS(service_station);
            })
        }
        $scope.selectedSS = function(service_station){
            $scope.ss_id = service_station.ss_id;
            $scope.booking_ss=service_station;
        }

        
        $scope.proceed = function(book_servicing)
        {
            book_servicing.ss_id=$scope.booking_ss.ss_id;
            $http.post('/ServiceBookings',book_servicing).success(function(){
                console.log("data insterted"+$scope.service_booking);
            })
            .error(function(){
                console.log("could not insert data"+$scope.service_booking);
            });

        }
}]);
