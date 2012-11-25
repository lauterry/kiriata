'use strict';

kiriataApp.controller('LibraryCtrl', ['$scope', 'kiriataService', function($scope, kiriataService) {

    console.log('LibraryCtrl');

    $scope.movies = kiriataService.fetch();

    $scope.remove = function(code){
        kiriataService.remove(code);
        $scope.movies = kiriataService.fetch();
    }

}]);


