'use strict';

kiriataApp.controller('MovieDetailCtrl', ['$scope', 'allocineService', '$routeParams',  function($scope, allocineService, $routeParams) {

    $scope.movie = allocineService.movieDetail($routeParams.code);

}]);
