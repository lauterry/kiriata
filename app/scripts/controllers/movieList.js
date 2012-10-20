'use strict';

kiriataApp.controller('MovieListCtrl', function($scope, $resource) {

    $scope.addMovie = function(movie){
        $scope.allocine = $resource("http://localhost:port/kiriata/:action",
            {action:'movies', port:':8000'},
            {create : { method : 'POST' }}
        );

        $scope.allocine.create(movie, function(){
            console.log("Movie saved : " + movie);
        });
    }
});
