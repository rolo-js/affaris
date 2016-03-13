'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('service.detail', {
        url:'/{id}/detail',
        templateUrl: 'app/catalogs/service/detail/detail.html',
        deepStateRedirect : {default:'service.detail.info', params:true},
        controller: 'ServiceDetailCtrl',
        controllerAs:'sd',
        resolve:{
          currentService : ['Service','$stateParams',function(Service,$stateParams){
              return Service.get({id:$stateParams.id}).$promise;
          }],
          $title: ['currentService',function(currentService) {
            return currentService.code ;
          }]
        }
      })

  });
