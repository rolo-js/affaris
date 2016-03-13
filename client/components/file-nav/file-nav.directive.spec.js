'use strict';

describe('Directive: fileNav', function () {

  // load the directive's module and view
  beforeEach(module('affarisApp'));
  beforeEach(module('components/file-nav/file-nav.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<file-nav></file-nav>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the fileNav directive');
  }));
});
