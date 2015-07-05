'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('CustomersCtrl', function ($scope,Customer) {
        $scope.customers= Customer.getList().$object;
  });
