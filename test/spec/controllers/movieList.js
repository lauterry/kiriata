'use strict';

describe('Controller: MovieListCtrl', function() {

  // load the controller's module
  beforeEach(module('kiriataApp'));

  var MovieListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MovieListCtrl = $controller('MovieListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
