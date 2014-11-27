'use strict';

/**
 * @ngdoc function
 * @name fluxSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fluxSampleApp
 */
angular.module('fluxSampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
