'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('service', {
        url: '/service',
        template: '<ui-view></ui-view>',
        controller: 'ServiceCtrl',
        deepStateRedirect: {default:'service.dash'},
        sticky:true
      })
      .state('service.dash',{
        url: '/dash/:id',
        templateUrl:'app/catalogs/service/service.html',
        sticky:true,
        resolve:{
          $title: function($translate) {
            return $translate('Servicios');
          }
        }
      });
  });
