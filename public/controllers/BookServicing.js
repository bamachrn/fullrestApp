var bsControllers = angular.module('bsControllers',[]);
bsControllers.controller('bsInputCtrl',
    ['$scope','$http','$routeParams',
    function($scope,$http,$routeParams){
       
       //this if else is for checking whether the book servicing request is comming
       //from service station page or not. if yes the directly select the service station
       if($routeParams.ss_id === undefined)
        {
            //console.log("not selecting a id");
            $http.get('/ServiceStations').success(function(service_stations){
                //console.log("got the data for service stations")
                $scope.service_stations = service_stations; 
                $scope.booking_ss=service_stations[0];
            });
        }
        else
        {  
            /**
             * TODO: user should have the option to select the service stations from here also
             * **/
            //console.log("========="+$routeParams.ss_id+"====comming to select with ID");
            $http.get('/ServiceStations/'+$routeParams.ss_id).success(function(service_station){
                $scope.service_stations = [];
                $scope.service_stations.push(service_station);
                //console.log("Got ss_id: "+service_station.ss_id);
                $scope.selectedSS(service_station);
            })
        }
        
        $scope.isMobileEmail=true;

        $scope.selectedSS = function(service_station){
            $scope.ss_id = service_station.ss_id;
            $scope.booking_ss=service_station;
        }
        
        //below functions are for maintaining the single page highlight of required things only
        $scope.searchMobileEmail = function()
        {
            $scope.isMobileEmail=false;
            $scope.isBikeDetails=true;
            $scope.isAddressDetails=false;
            $scope.isSummary=false;

            $scope.validateCustomer();
        }
        $scope.enterBikeDetails = function()
        {
            $scope.isMobileEmail=false;
            $scope.isBikeDetails=false;
            $scope.isAddressDetails=true;
            $scope.isSummary=false;
        }
        $scope.backToBikeDetails = function()
        {
            $scope.isMobileEmail=false;
            $scope.isBikeDetails=true;
            $scope.isAddressDetails=false;
            $scope.isSummary=false;
        }
        $scope.enterAddress = function()
        {
            $scope.isMobileEmail=false;
            $scope.isBikeDetails=false;
            $scope.isAddressDetails=false;
            $scope.isSummary=true; 
        }
        $scope.backToAddress = function()
        {
            $scope.isMobileEmail=false;
            $scope.isBikeDetails=false;
            $scope.isAddressDetails=true;
            $scope.isSummary=false;
        }
        $scope.book_servicing = function(book_servicing)
        {
            book_servicing.ss_id=$scope.booking_ss.ss_id;
            
            book_servicing.bike_id = $scope.bike_id;
            book_servicing.bike_name = $scope.bike_name;
            book_servicing.bike_number = $scope.bike_number;

            $http.post('/ServiceBookings',book_servicing).success(function(){
                console.log("data insterted"+$scope.service_booking);
            })
            .error(function(){
                console.log("could not insert data"+$scope.service_booking);
            });

        }
        $scope.selectBike = function(bike)
        {
            $scope.bike_id = bike.bike_id;
            $scope.bike_name = bike.name;
            $scope.bike_number = bike.number;
        }
        $scope.validateCustomer = function()
        {
            var mobile = $scope.book_servicing.mobile;
            var email = $scope.book_servicing.email;
            
        }
}]);
