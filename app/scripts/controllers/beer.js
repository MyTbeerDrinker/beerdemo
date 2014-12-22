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
    $scope.beers = [];

    $scope.submit = function() {
      $scope.beers = [];

      breweryDBFactory.search($scope.text)
        .success(function (data) {
          for (var i = 0; i < data.beers.length; i++) {
            var beer = data.beers[i].name,
              brewery = data.beers[i].brewery.name;
            $scope.beers.push(brewery + ' - ' + beer);
          }
        });

      $scope.text = '';

    };

  }])
;
