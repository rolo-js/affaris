'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('service.detail', {
        url: '/detail/:id',
        templateUrl: 'app/catalogs/service/detail/detail.html',
        controller: 'ServiceDetailCtrl',
        controllerAs:'sd'
      });
  });
