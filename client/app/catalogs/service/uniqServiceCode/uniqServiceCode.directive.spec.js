'use strict';

describe('Directive: uniqServiceCode', function () {

  // load the directive's module
  beforeEach(module('affarisApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<uniq-service-code></uniq-service-code>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uniqServiceCode directive');
  }));
});
