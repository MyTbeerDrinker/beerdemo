'use strict';

/**
 * @ngdoc function
 * @name beerdemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beerdemoApp
 */
angular.module('beerdemoApp')
  .controller('BeerCtrl', ['$scope','breweryDBFactory', function ($scope, breweryDBFactory) {

    $scope.reset= function() {
      $scope.beers = [];
      $scope.noResults = false;
      $scope.text = '';
    };

    $scope.submit = function() {
      breweryDBFactory.search($scope.text)
        .success(function (data) {
          if (data.beers.length > 0) {
            $scope.beers = data.beers;
          }
          else {
            $scope.noResults = true;
          }
        });
    };

    $scope.reset();
  }])

  .controller('BeerDetailsCtrl', ['$scope', '$routeParams', 'breweryDBFactory',
    function ($scope, $routeParams, breweryDBFactory) {
    $scope.beer = {};
    $scope.beerId = $routeParams.id;

    breweryDBFactory.details($scope.beerId)
        .success(function (data) {
          $scope.beer = data;
        });

  }])
;
