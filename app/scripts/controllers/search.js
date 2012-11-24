'use strict';

kiriataApp.controller('SearchCtrl', ['$scope', '$resource', '$location',  function($scope, $resource, $location) {

    $scope.search = function(input){

        $scope.allocine = $resource("http://api.allocine.fr/rest/v3/:action",
            {action:'search', q:'', partner:'YW5kcm9pZC12M3M', format:'json', callback:'JSON_CALLBACK'},
            {get:{method:'JSONP'}}
        );

        $scope.movies = $scope.allocine.get({q:input});

        $location.path('/movieList');

    }

}]);
