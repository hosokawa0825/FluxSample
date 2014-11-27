'use strict';

/**
 * @ngdoc function
 * @name fluxSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fluxSampleApp
 */
angular.module('fluxSampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
