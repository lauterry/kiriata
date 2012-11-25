'use strict';

kiriataApp.controller('MovieListCtrl', ['$scope', '$routeParams', 'kiriataService', 'allocineService', function($scope, $routeParams, kiriataService, allocineService) {

    allocineService.search($routeParams.word, {
        success : function(movies){
            $scope.movies = movies;
        },
        error :function(e) {
            console.log(e.message);
        }
    } );

    $scope.addMovie = function(movie){
        kiriataService.save(movie, {
            success : function(movies){

            },
            error : function(e){
                console.log(e.message);
            }
        });
    }
}]);
