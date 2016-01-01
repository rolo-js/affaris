'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project',
        views:{
          '@':{
              templateUrl: 'app/project/project.html',
              controller: 'ProjectCtrl',
              controllerAs:'project',
          }
        },
        deepStateRedirect: {default:'project.dash'},
        sticky:true
      })
      .state('project.dash',{
        url:'/dash',
        templateUrl: 'app/project/project_dash.html'
      })
      .state('project.detail',{
        url:'/detail',
        templateUrl: 'app/project/project_detail.html',
        deepStateRedirect : {default:'project.detail.info'}
      })
      .state('project.detail.info',{
        url:'/info',
        templateUrl: 'app/project/project_info.html'
      })
      .state('project.detail.docs',{
        url:'/docs',
        templateUrl: 'app/project/project_docs.html'
      });
  });
