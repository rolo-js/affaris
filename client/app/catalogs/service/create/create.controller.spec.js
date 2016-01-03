'use strict';

describe('Controller: ServiceCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('affarisApp'));

  var ServiceCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceCreateCtrl = $controller('ServiceCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
