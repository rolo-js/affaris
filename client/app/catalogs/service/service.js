'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('service', {
        url: '/service',
        views:{
          '@':{
            templateUrl:'app/catalogs/service/service.html',
            controller: 'ServiceCtrl',
            controllerAs: 'services'
          }
        },
        deepStateRedirect: {default:'service.dash'},
        sticky:true
      })
      .state('service.dash',{
        url: '/dash',
        templateUrl:'app/catalogs/service/dash/dash.html',
        params:{
          gotoId:{ value:'', squash:true}
        },
        controller:'ServiceDashCtrl',
        controllerAs:'servicedash',
        sticky:true,
        resolve:{
          $title: function($translate) {
            return $translate('Servicios');
          }
        }
      });
  });
