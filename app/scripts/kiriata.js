'use strict';

// Declare app level module which depends on filters, and services
var kiriataApp = angular.module('kiriataApp', ['ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movieList', {
        templateUrl: 'views/movieList.html',
        controller: 'MovieListCtrl'
      })
      .when('/movieDetail/:code', {
        templateUrl: 'views/movieDetail.html',
        controller: 'MovieDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

// Mocked module to be able to develop without a server
var mockedKiriataApp = angular.module('mockedKiriataApp', ['kiriataApp', 'ngMockE2E']);
mockedKiriataApp.run(function($httpBackend) {
    var ownedMovies = [  {
                        "id": 1,
                        "comment": "Super film. La 3D est géniale.",
                        "status": "seen",
                        "rate": 5,
                        "code": "61282",
                        "lastWatched": "2012-09-05"
                    },
                    {
                        "id": 2,
                        "comment": "Ce film est nul",
                        "status": "seen",
                        "rate": 1,
                        "code": "61827",
                        "lastWatched": "2011-10-15"
                    }];

    // calls to return templates are not mocked
    $httpBackend.whenGET(/^views/).passThrough();

    // calls to allocine are not mocked
    $httpBackend.whenJSONP(/^http:\/\/api.allocine.fr/).passThrough();

    // returns the current list of owned movies
    $httpBackend.whenGET(/^http:\/\/localhost\/kiriata\/movies/).respond(ownedMovies);

    // adds a new movie to the ownedMovies array
    $httpBackend.whenPOST(/^http:\/\/localhost\/kiriata\/movies/).respond(function(method, url, data) {
        var movie =  {
            "id": 3,
            "comment": "Super film. La 3D est géniale.",
            "status": "seen",
            "rate": 5,
            "code": angular.fromJson(data).code,
            "lastWatched": "2012-09-05"
        };

       ownedMovies.push(angular.fromJson(movie));

    });

});