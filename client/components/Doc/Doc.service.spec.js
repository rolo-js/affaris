'use strict';

describe('Service: Doc', function () {

  // load the service's module
  beforeEach(module('affarisApp'));

  // instantiate service
  var Doc;
  beforeEach(inject(function (_Doc_) {
    Doc = _Doc_;
  }));

  it('should do something', function () {
    expect(!!Doc).toBe(true);
  });

});
