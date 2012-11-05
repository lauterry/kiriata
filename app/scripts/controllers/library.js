'use strict';

kiriataApp.controller('LibraryCtrl', ['$scope', '$resource', function($scope, $resource) {

    $scope.allocine = $resource("http://localhost:port/kiriata/:action",
        {action:'movies', q:'', 'port':':8000'}
    );

    var movies = $scope.allocine.query(function(){
        $scope.movies = movies;
    });

}]);


