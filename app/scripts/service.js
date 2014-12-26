'use strict';

/**
 * @ngdoc overview
 * @name beerdemoApp.service
 * @description
 * # Service for communicating with the BreweryDB API
 *
 * Main module of the application.
 */
angular.module('beerdemoApp')
  .factory('breweryDBFactory', ['$http', function($http) {

    // development key
    // todo: http://www.ng-newsletter.com/advent2013/#!/day/5
    var urlBase = 'http://api.openbeerdatabase.com/v1/',
      breweryDBFactory = {}
    ;

    breweryDBFactory.search = function (query) {
      var urlPath = 'beers.json/?query=' + encodeURIComponent(query);
      var url = urlBase + urlPath + '&callback=JSON_CALLBACK';
      return $http.jsonp(url);
    };

    breweryDBFactory.details = function (id) {
      var urlPath = 'beers/' + encodeURIComponent(id) + '.json';
      var url = urlBase + urlPath + '?callback=JSON_CALLBACK';
      return $http.jsonp(url);
    };

    return breweryDBFactory;
  }]);