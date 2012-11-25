'use strict';

describe('Service: kiriataService', function () {

  // load the service's module
  beforeEach(module('kiriataApp'));

  // instantiate service
  var kiriataService;
  beforeEach(inject(function(_kiriataService_) {
    kiriataService = _kiriataService_;
  }));

  it('should do something', function () {
    expect(!!kiriataService).toBe(true);
  });

});
