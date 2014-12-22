'use strict';

/**
 * @ngdoc function
 * @name beerdemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beerdemoApp
 */
angular.module('beerdemoApp')
  .controller('BeerCtrl', function ($scope) {
    $scope.beers = [
      'Big Hugs',
      'Zombie Dust',
      'Bourbon County Stout'
    ];
  });
