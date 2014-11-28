'use strict';

/**
 * @ngdoc function
 * @name fluxSampleApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the fluxSampleApp
 */
angular.module('fluxSampleApp')
    .controller('CatalogCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

var CatalogCtrl = function() {
    constractor(catalogItems, cartActions) {
        this.cartActions = cartActions;
        this.catalogItems = catalogItems;
    }

    addToCart(catalogItem) {
        this.cartActions.addItem(catalogItem);
    }
}