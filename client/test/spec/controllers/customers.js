'use strict';

describe('Controller: CustomersCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CustomersCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    CustomersCtrl = $controller('CustomersCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CustomersCtrl.awesomeThings.length).toBe(3);
  });
});
