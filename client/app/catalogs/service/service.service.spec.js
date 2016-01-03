'use strict';

describe('Service: service', function () {

  // load the service's module
  beforeEach(module('affarisApp'));

  // instantiate service
  var service;
  beforeEach(inject(function (Service) {
    service = Service;
  }));

  it('should do something', function () {
    expect(!!service).toBe(true);
  });

});
