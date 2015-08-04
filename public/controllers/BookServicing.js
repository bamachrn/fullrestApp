var bsControllers = angular.module('bsControllers',[]);
bsControllers.controller('bsInputCtrl',
    ['$scope','$http',
    function($scope,$http){
        
        $http.get('/ServiceStations').success(function(service_stations){
            //console.log("got the data for service stations")
            $scope.service_stations = service_stations; 
        });
        
        $scope.proceed = function(book_servicing)
        {
            $http.post('/ServiceBookings',book_servicing).success(function(){
                console.log("data insterted"+$scope.service_booking);
            })
            .error(function(){
                console.log("could not insert data"+$scope.service_booking);
            });

        }
    }]);
