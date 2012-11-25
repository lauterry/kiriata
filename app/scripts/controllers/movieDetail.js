'use strict';

kiriataApp.controller('MovieDetailCtrl', ['$scope', 'allocineService', '$routeParams',  function($scope, allocineService, $routeParams) {

    allocineService.movieDetail($routeParams.code, {
        success : function(movie){
            $scope.movie =  movie;
        },
        error : function(e){
            console.log(e.message);
        }
    });

}]);
