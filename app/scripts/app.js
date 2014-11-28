'use strict';

/**
 * @ngdoc overview
 * @name fluxSampleApp
 * @description
 * # fluxSampleApp
 *
 * Main module of the application.
 */
angular
  .module('fluxSampleApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var m = angular.module('cart', []);
m.value("catalogItems", [
    {id: 1, title: 'Item #1', cost: 1},
    {id: 2, title: 'Item #2', cost: 2},
    {id: 3, title: 'Item #3', cost: 3}
]);
