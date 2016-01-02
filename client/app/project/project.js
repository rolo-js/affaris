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
        templateUrl: 'app/project/project_dash.html',
        resolve:{
          $title: function($translate) {
            return $translate('Proyectos');
          }
        }
      })
      .state('project.detail',{
        url:'/{id}/detail',
        templateUrl: 'app/project/project_detail.html',
        deepStateRedirect : {default:'project.detail.info', params:true},
        controller:function($scope,$state){ $scope.id = $state.params.id}
      })
      .state('project.detail.info',{
        url:'/info',
        templateUrl: 'app/project/project_info.html',
        controller:function($scope,$state){$scope.id = $state.params.id},
        resolve:{
          $title: function($stateParams) {return $stateParams.id }
        }
      })
      .state('project.detail.docs',{
        url:'/docs',
        templateUrl: 'app/project/project_docs.html',
        resolve:{
          $title: function($stateParams) {return $stateParams.id }
        }
      });
  });
