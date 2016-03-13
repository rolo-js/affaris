'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('service.detail.info',{
        url:'/info',
        templateUrl: 'app/catalogs/service/info/info.html',
        controller:'ServiceInfoCtrl',
        controllerAs:'svcCtrl'
      });
  });
