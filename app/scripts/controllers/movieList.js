'use strict';

kiriataApp.controller('MovieListCtrl', function($scope, $resource) {
    $scope.addMovie = function(code){
        $scope.allocine = $resource("http://localhost:8000/kiriata/:action",
            {action:'movies'},
            {create : { method : 'POST' }}
        );

        $scope.allocine.create({code:code}, function(){
            console.log("Movie saved : " + code);
        });
    }
});
