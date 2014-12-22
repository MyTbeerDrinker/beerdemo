'use strict';

/**
 * @ngdoc function
 * @name beerdemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beerdemoApp
 */
angular.module('beerdemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
