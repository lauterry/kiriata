'use strict';

kiriataApp.controller('MovieDetailCtrl', function($scope, $resource, $routeParams) {
    $scope.allocine = $resource("http://api.allocine.fr/rest/v3/:action",
        {action:'movie', code:'0', partner:"YW5kcm9pZC12M3M", profile:'small', format:'json', callback:'JSON_CALLBACK'},
        {get:{method:'JSONP'}}
    );

    $scope.movie = $scope.allocine.get({code:$routeParams.code});

});
