var bsControllers = angular.module('bsControllers',[]);
bsControllers.controller('bsInputCtrl',
    ['$scope','$http',
    function($scope,$http){
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
