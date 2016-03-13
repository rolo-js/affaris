'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('service.detail.docsProject', {
        url: '/docsproj',
        templateUrl: 'app/catalogs/service/docs/docs.html',
        controller: 'ServiceDocsCtrl',
        data:{
          type:'projectTemplate'
        }
      })
      .state('service.detail.docsProposal', {
        url: '/docsprop',
        templateUrl: 'app/catalogs/service/docs/docs.html',
        controller: 'ServiceDocsCtrl',
        data:{
          type:'proposalTemplate'
        }
      });

  });
