var ssApp = angular.module('ssApp',[]);
ssApp.controller('servicestationCtrl',['$scope','$http',function($scope,$http){
        console.log("hello world from Service Station controller");
            
            $http.get('/ServiceStations').success(function(service_stations){
                        console.log("got the data which is requested  :)  ");
                                $scope.service_stations = service_stations; 
                    });
                
                $scope.addBook = function(){
                            console.log($scope.book);
                                    $http.post('/api/Books',$scope.book).success(function(response){
                                                    console.log("Inside Add Contact Function");
                                                            //$scope.books = [];
                                                            //          //books = response
                                                            //                      
                                                            //                              });
                                                            //                                  };
                                                            //                                      
                                                            //                                          
                                                            //                                                $scope.removebook = function(bookId){
                                                            //                                                        console.log("Inside Remove Function");
                                                            //                                                                console.log("Requested ID is delievered");
                                                            //                                                                        console.log(bookId);
                                                            //                                                                              $http.delete('/api/Books/' + bookId)
                                                            //                                                                                  console.log("Book Deleted");
                                                            //                                                                                       };
                                                            //                                                                                           
                                                            //                                                                                               
                                                            //                                                                                                    $scope.edit = function(id){
                                                            //                                                                                                             console.log(id);
                                                            //                                                                                                                      $http.get('/api/Books/' + id).success(function(response){
                                                            //                                                                                                                                   console.log("Inside Edit function");
                                                            //                                                                                                                                               $scope.book = response; 
                                                            //                                                                                                                                                        });
                                                            //                                                                                                                                                             };
                                                            //                                                                                                                                                                 
                                                            //                                                                                                                                                                      $scope.update = function(){
                                                            //                                                                                                                                                                              console.log($scope.book._id);
                                                            //                                                                                                                                                                                       $http.put('/api/Books/' + $scope.book._id,$scope.book).success(function(response){
                                                            //                                                                                                                                                                                                    console.log("Inside Update Function");
                                                            //                                                                                                                                                                                                                 console.log(response);
                                                            //                                                                                                                                                                                                                          });
                                                            //                                                                                                                                                                                                                              };  
                                                            //                                                                                                                                                                                                                              }]);
