'use strict';

kiriataApp.controller('SearchCtrl', ['$scope', 'allocineService', '$location',  function($scope, allocineService, $location) {

    $scope.search = function(input){
        $location.path('/search/' + input);
    }

}]);
