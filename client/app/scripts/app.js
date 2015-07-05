'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider,RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Customers', {
        templateUrl: 'views/customers.html',
        controller: 'CustomersCtrl',
        controllerAs: 'Customers'
      })
      .otherwise({
        redirectTo: '/'
      });
      RestangularProvider.setBaseUrl('http://localhost:3000');
    })
    .factory('CustomerRestangular', function(Restangular) {
      return Restangular.withConfig(function(RestangularConfigurer) {
              RestangularConfigurer.setRestangularFields({
                        id: '_id'
                                });
                });
    })
    .factory('Customer', function(CustomerRestangular) {
      return CustomerRestangular.service('customer');
    });

