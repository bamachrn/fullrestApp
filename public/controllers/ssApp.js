var ssApp = angular.module('ssApp',[
    'ngRoute',
    'smart-table',
    'ssControllers'
]);
ssApp.config(['$locationProvider','$routeProvider',
    function($locationProvider,$routeProvider) {
        //$locationProvider.html5Mode(true);
        $routeProvider.
            when('/ServiceStations', {
                templateUrl: 'views/SeviceStations.html',
                controller: 'ssListCtrl'
            }).
            when('/ServiceStations/:ss_id', {
                templateUrl: 'views/SeviceStationDetails.html',
                controller: 'ssDetailsCtrl'
            }).
            otherwise({
                redirectTo: '/ServiceStations'
            });
    }]);
