'use strict';

describe('Controller: SearchCtrl', function() {

  // load the controller's module
  beforeEach(module('kiriataApp'));

  var SearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
      SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.movies.length).toBe(0);
  });
});
