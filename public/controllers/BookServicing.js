var bsControllers = angular.module('bookServiceControllers',[]);
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
        
        $http.get('/BikeBrands').success(function(bike_brands){
            bike_brands.splice(0,1);
            $scope.bike_brands = bike_brands;
            $scope.bike_brand_selected = bike_brands[0];
        });

        $scope.isMobileEmail=true;
        //$scope.isSearchEmail=false;

        $scope.selectedSS = function(service_station){
            $scope.ss_id = service_station.ss_id;
            $scope.booking_ss = service_station;
            $scope.getBikeBrands(service_station.brand_id); 
        }

        $scope.getBikeBrands=function(brand_id)
        {
            if(brand_id==="0")
            {
                $http.get('/BikeBrands').success(function(bike_brands){
                    bike_brands.splice(0,1);
                    $scope.bike_brands = bike_brands;
                    $scope.bike_brand_selected = bike_brands[0];
                });
            }
            else
            {
                $http.get('/BikeBrands/'+brand_id).success(function(bike_brand){
                    $scope.bike_brands=[];
                    $scope.bike_brands.push(bike_brand);
                    $scope.bike_brand_selected=bike_brand;
                });
            }
        }
        
        //check the user is existing or not if present then provide login page
        //else provide the signup page
        $scope.searchMobileEmail = function()
        {
            $http.post('/Customers/'+$scope.book_servicing.email,$scope.book_servicing)
            .success(function(data){
                if(data)
                {
                    $scope.customer = data;
                    $scope.isExistingUser=true;
                    $scope.shouldNoFill=false;
                    $scope.isNewUser=false;
                }
                else
                {
                    $scope.isNewUser=true;
                    $scope.isExistingUser=false;
                    $scope.shouldNoFill=false;
                }
            });         
            //reseting the login try count for checking how many times user
            //is trying to login
            $scope.try_count=0;
            //console.log("retirieved password: "+$scope.customer.email);
        }
        $scope.loginAutoFill = function(){
            //if provided user name and password is correct then 
            //show the bike details with auto fillup 
            if($scope.customer.password===$scope.exist_user.password)
            {
                $scope.isMobileEmail=false;
                $scope.isBikeDetails=false;
                $scope.isAddressDetails=false;
                $scope.shouldEditDetails=false;
                $scope.isSummary=true;
            }
            //allow three times wrong password on fourth time
            //ask whether to proceed without auto fillup
            else  
            {
                if($scope.try_count<4)
                {
                    $scope.try_count+=1;
                    $scope.passwd_warn=true;
                    $scope.shouldNoFill=true;
                }
                else
                {
                    $scope.isCheckFail=true;
                    $scope.isExistingUser=false;
                    $scope.shouldNoFill=true;
                    $scope.isNewUser=false;
                }
            }
        }
        //If user is not able to provide password proceed without auto fill
        $scope.proceedNoFill = function(){
            $scope.isExistingUser=true;
            $scope.isMobileEmail=false;
            $scope.isBikeDetails=true;
            $scope.isAddressDetails=false;
            $scope.shouldEditDetails=false;
            $scope.isSummary=false;
        }

        //this function creates a new user with provided emailid 
        //and allows user to enter data without auto fill
        $scope.createUserNoFill = function(){
            $scope.isExistingUser=false;
            $scope.new_password = $scope.new_user.password;

            $scope.isMobileEmail=false;
            $scope.isBikeDetails=true;
            $scope.isAddressDetails=false;
            $scope.shouldEditDetails=false;
            $scope.isSummary=false;
        }

        //show only address details part
        $scope.enterBikeDetails = function()
        {
            $scope.isMobileEmail=false;
            $scope.isBikeDetails=false;
            $scope.isAddressDetails=true;
            $scope.shouldEditDetails=false;
            $scope.isSummary=false;
        }
        //back to bike details part
        $scope.backToBikeDetails = function()
        {
            $scope.isMobileEmail=false;
            $scope.isBikeDetails=true;
            $scope.isAddressDetails=false;
            $scope.shouldEditDetails=false;
            $scope.isSummary=false;
        }
        //show the summarize view
        $scope.enterAddress = function()
        {
            $scope.isMobileEmail=false;
            $scope.isBikeDetails=false;
            $scope.isAddressDetails=false;
            $scope.shouldEditDetails=false;
            $scope.isSummary=true; 
        }
        //back to address view
        $scope.backToAddress = function()
        {
            $scope.isMobileEmail=false;
            $scope.isBikeDetails=false;
            $scope.isAddressDetails=true;
            $scope.shouldEditDetails=false;
            $scope.isSummary=false;
        }

        /**
         *This function is for booking service, if the customer is an existing one
         *data will go only to book service post, if customer is new customer details
         *will be inserted to customer table. newly generated customer id will be used
         *for booking the new service
         * */
        $scope.bookService = function(book_servicing)
        {
            book_servicing.ss_id=$scope.booking_ss.ss_id;
           /* book_servicing.bike_id = $scope.bike_id;
            book_servicing.bike_name = $scope.bike_name;
            book_servicing.bike_number = $scope.bike_number;
           */ 
            var customer ={
                mobile:$scope.book_servicing.mobile,
                email:$scope.book_servicing.email,
                first_name:$scope.book_servicing.first_name,
                last_name:$scope.book_servicing.last_name,
                gender:1,//$scope.book_servicing.gender,
                password:$scope.new_password
            }
            
            /*console.log(customer);
            console.log(book_servicing);*/
            var customerUpdated = $http.post('/Customers',customer)
            .success(function(customer){
                $scope.customer_id = customer.customer_id;
            });

            customerUpdated.then(function(){
                var customer_bike={
                    customer_id: $scope.customer_id,
                    brand_id: $scope.bike_brand_selected.brand_id,
                    model_name: $scope.book_servicing.model_name,
                    bike_number: $scope.book_servicing.bike_number
                }
            });
            var customerBikeUpdated = $http.post('/CustomerBikes',)

            customerBikeUpdated.then(function(){
                book_servicing.customer_id = $scope.customer_id;
                console.log(book_servicing);
                $http.post('/ServiceBookings',book_servicing).success(function(){
                    console.log("data insterted"+book_servicing);
                })
                .error(function(){
                    console.log("could not insert data"+book_servicing);
                });
            });

        }
        $scope.selectBike = function(bike)
        {
            $scope.bike_id = bike.bike_id;
            $scope.bike_name = bike.name;
            $scope.bike_number = bike.number;
        }
        $scope.addBike = function(){
            $scope.wantsToAddBike=true;
        }
}]);
