'use strict';

kiriataApp.controller('MovieListCtrl', ['$scope', 'kiriataService', function($scope, kiriataService) {

    $scope.addMovie = function(movie){

        kiriataService.save(movie, function(){
            console.log("Movie saved : " + movie);
        });
    }
}]);
