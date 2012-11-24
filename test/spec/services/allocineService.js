'use strict';

describe('Service: allocineService', function () {

  // load the service's module
  beforeEach(module('kiriataApp'));

  // instantiate service
  var allocineService;
  beforeEach(inject(function(_allocineService_) {
    allocineService = _allocineService_;
  }));

  it('should do something', function () {
    expect(!!allocineService).toBe(true);
  });

});
