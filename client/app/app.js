'use strict';

angular.module('affarisApp', [
  'affarisApp.auth',
  'affarisApp.admin',
  'affarisApp.constants',
  'affarisApp.translate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ct.ui.router.extras'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
