'use strict'

const app = angular.module('followersApp', [
  'ngMaterial']);

app.config(['$mdThemingProvider', function( $mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('orange');
  }]);
