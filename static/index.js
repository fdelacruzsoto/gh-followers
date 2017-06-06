'use strict'

const app = angular.module('followersApp', ['ngStorage',
  'ngRoute',
  'ngMaterial']);

  app.config(['$routeProvider', '$httpProvider', '$locationProvider', '$mdThemingProvider', function($routeProvider, $httpProvider, $locationProvider, $mdThemingProvider) {

    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).
      when('/followers', {
        templateUrl: 'views/history.html',
        controller: 'FollowersCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('orange');

  }]);
