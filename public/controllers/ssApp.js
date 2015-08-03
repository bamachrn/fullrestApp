var ssApp = angular.module('ssApp',[
    'ngRoute',
    'smart-table',
    'ssControllers',
    'bsControllers'
]);
ssApp.config(['$locationProvider','$routeProvider','$httpProvider',
    function($locationProvider,$routeProvider,$httpProvider) {
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
            when('/BookService',{
                templateUrl: 'views/BookServicing.html',
                controller: 'bsInputCtrl'
            }).
            otherwise({
                redirectTo: '/ServiceStations'
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
