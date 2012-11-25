'use strict';

kiriataApp.controller('LibraryCtrl', ['$scope', 'kiriataService', function($scope, kiriataService) {

     kiriataService.fetch({
        success : function(movies){
            $scope.movies = movies;
        },
        error : function(e){
            console.log(e.message);
        }
    });

    $scope.remove = function(code){
        kiriataService.remove(code, {
            success : function(movies){

            },
            error : function(e){
                console.log(e.message);
            }
        });
    }

}]);


