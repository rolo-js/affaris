'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('service', {
        url: '/service',
        templateUrl: 'app/catalogs/service/service.html',
        controller: 'ServiceCtrl'
      });
  });
