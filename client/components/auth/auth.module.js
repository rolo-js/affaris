'use strict';

angular.module('affarisApp.auth', [
  'affarisApp.constants',
  'affarisApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
