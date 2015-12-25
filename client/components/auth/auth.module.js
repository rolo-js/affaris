'use strict';

angular.module('v3App.auth', [
  'v3App.constants',
  'v3App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
