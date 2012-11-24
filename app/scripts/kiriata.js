'use strict';

// Declare app level module which depends on filters, and services
var kiriataApp = angular.module('kiriataApp', ['ngResource']);
kiriataApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/library', {
        templateUrl: 'views/library.html',
        controller: 'LibraryCtrl'
      })
      .when('/movieList', {
        templateUrl: 'views/movieList.html',
        controller: 'MovieListCtrl'
      })
      .when('/movieDetail/:code', {
        templateUrl: 'views/movieDetail.html',
        controller: 'MovieDetailCtrl'
      })
      .when('/404', {
        templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  }]);


// Mocked module to be able to develop without a server
var mockedKiriataApp = angular.module('mockedKiriataApp', ['kiriataApp', 'ngMockE2E']);

mockedKiriataApp.run(function($httpBackend, localStorageService) {
    var ownedMovies = [  {
                        "id": 1,
                        "comment": "Super film. La 3D est géniale.",
                        "status": "seen",
                        "rate": 5,
                        "code": 61282,
                        "originalTitle": "Avatar",
                        "title": "Avatar",
                        "productionYear":"2009",
                        "release":{
                            releaseDate: "2005-09-05"
                        },
                        "castingShort": {
                            "actors":"Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez",
                            "directors":"James Cameron"
                        },
                        "poster": {
                            "href":"http://images.allocine.fr/medias/nmedia/18/78/95/70/19485155.jpg"
                        },
                        "lastWatched": "2012-09-05"
                    },
                    {
                        "id": 2,
                        "comment": "Super film. La 3D est géniale.",
                        "status": "seen",
                        "rate": 2,
                        "code": 181097,
                        "originalTitle": "Resident Evil: Retribution",
                        "title": "Avatar",
                        "productionYear":"2012",
                        "release":{
                            releaseDate: "2012-09-26"
                        },
                        "castingShort": {
                            "actors":"Milla Jovovich, Michelle Rodriguez, Kevin Durand, Sienna Guillory, Shawn Roberts",
                            "directors":"Paul W.S. Anderson"
                        },
                        "poster": {
                            "href":"http://images.allocine.fr/medias/nmedia/18/88/72/28/20204615.jpg"
                        },
                        "lastWatched": "2011-04-20"
                    }];


    localStorageService.add('movies', angular.toJson(ownedMovies));

    // calls to return templates are not mocked
    $httpBackend.whenGET(/^views/).passThrough();

    // calls to allocine are not mocked
    $httpBackend.whenJSONP(/^http:\/\/api.allocine.fr/).passThrough();

    // returns the current list of owned movies
    $httpBackend.whenGET(/^http:\/\/localhost:8000\/kiriata\/movies/).respond(localStorageService.get('movies'));

    // adds a new movie to the ownedMovies array
    $httpBackend.whenPOST(/^http:\/\/localhost:8000\/kiriata\/movies/).respond(function(method, url, data) {

        var movies = angular.fromJson(localStorageService.get('movies'));
        movies.push(angular.fromJson(data));

        localStorageService.add('movies', angular.toJson(movies));
       return 200;
    });

});