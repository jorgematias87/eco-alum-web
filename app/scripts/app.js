'use strict';

/**
 * @ngdoc overview
 * @name webAngularApp
 * @description
 * # webAngularApp
 *
 * Main module of the application.
 */
angular
  .module('webAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.jq'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/quienes-somos', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/productos/cerramientos/aluminio', {
        templateUrl: 'views/aluminio.html',
        controller: 'MainCtrl'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'MainCtrl'
      })
      .when('/productos/cerramientos/balcon-templado', {
        templateUrl: 'views/balcon-templado.html',
        controller: 'MainCtrl'
      })
      .when('/productos/cerramientos/pvc', {
        templateUrl: 'views/pvc.html',
        controller: 'MainCtrl'
      })
      .when('/productos/baños/mamparas', {
        templateUrl: 'views/mamparas.html',
        controller: 'MainCtrl'
      })
      .when('/productos/baños/refacciones', {
        templateUrl: 'views/refacciones.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
