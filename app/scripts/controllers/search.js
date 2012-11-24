'use strict';

kiriataApp.controller('SearchCtrl', ['$scope', 'allocineService', '$location',  function($scope, allocineService, $location) {

    $scope.search = function(input){

        $scope.movies = allocineService.search(input);

        $location.path('/movieList');

    }

}]);
