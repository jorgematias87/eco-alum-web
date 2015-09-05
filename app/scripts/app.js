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
      .when('/testimonios', {
        templateUrl: 'views/testimonios.html',
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
      .when('/productos/banios/mamparas', {
        templateUrl: 'views/mamparas.html',
        controller: 'MainCtrl'
      })
      .when('/productos/banios/refacciones', {
        templateUrl: 'views/refacciones.html',
        controller: 'MainCtrl'
      })
      .when('/productos/pintura/exterior', {
        templateUrl: 'views/pintura-exterior.html',
        controller: 'MainCtrl'
      })
      .when('/productos/pintura/interior', {
        templateUrl: 'views/pintura-interior.html',
        controller: 'MainCtrl'
      })
      .when('/productos/durlock/paredes', {
        templateUrl: 'views/durlock-paredes.html',
        controller: 'MainCtrl'
      })
      .when('/productos/durlock/revestimientos', {
        templateUrl: 'views/durlock-revestimientos.html',
        controller: 'MainCtrl'
      })
      .when('/productos/durlock/cielorasos', {
        templateUrl: 'views/durlock-cielorasos.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
