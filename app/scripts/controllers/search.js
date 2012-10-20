'use strict';

kiriataApp.controller('SearchCtrl', function($scope, $resource, $location) {

    $scope.search = function(){

        $scope.allocine = $resource("http://api.allocine.fr/rest/v3/:action",
            {action:'search', q:'', partner:'YW5kcm9pZC12M3M', format:'json', callback:'JSON_CALLBACK'},
            {get:{method:'JSONP'}}
        );

        $scope.movies = $scope.allocine.get({q:$scope.searchInput});

        $location.path('/movieList');

    }

});
