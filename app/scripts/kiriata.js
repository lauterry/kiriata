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
