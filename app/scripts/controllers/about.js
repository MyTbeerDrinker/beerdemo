'use strict';

/**
 * @ngdoc function
 * @name beerdemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beerdemoApp
 */
angular.module('beerdemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
