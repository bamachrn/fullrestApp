var ssApp = angular.module('ssApp',[
    'ngRoute',
    'smart-table',
    'ui.bootstrap',
    'ssControllers',
    'bsControllers',
    'locationOperations'
]);
ssApp.config(['$locationProvider','$routeProvider','$httpProvider',
    function($locationProvider,$routeProvider,$httpProvider) {
        //$locationProvider.html5Mode(true);
        $routeProvider.
            when('/SearchServiceStations', {
                templateUrl: 'views/SearchServiceStations.html',
                controller: 'ssListCtrl'
            }).
            when('/ServiceStationDetails/:ss_id', {
                templateUrl: 'views/ServiceStationDetails.html',
                controller: 'ssDetailsCtrl'
            }).
            when('/BookService',{
                templateUrl: 'views/BookServicing.html',
                controller: 'bsInputCtrl'
            }).
            when('/BookService/:ss_id',{
                templateUrl: 'views/BookServicing.html',
                controller: 'bsInputCtrl'
            }).
            otherwise({
                redirectTo: '/SearchServiceStations'
            });
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
            var key, result = [];
            if (typeof data === "string")
                return data;
            for (key in data) {
                if (data.hasOwnProperty(key))
                    result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
            }
            return result.join("&");
        });
    }]);
