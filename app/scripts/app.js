'use strict';

/**
 * @ngdoc overview
 * @name beerdemoApp
 * @description
 * # beerdemoApp
 *
 * Main module of the application.
 */
angular
  .module('beerdemoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/beer.html',
        controller: 'BeerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
