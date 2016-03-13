'use strict';


angular.module('affarisApp')
  .config(function ($stateProvider) {
    var modalInstance;
    $stateProvider
      .state('service.dash.create', {
        url: '/create',
        onEnter: ['$stateParams', '$state', '$uibModal', '$resource', function($stateParams, $state, $uibModal, $resource) {
                modalInstance = $uibModal.open({
                    templateUrl: 'app/catalogs/service/create/create.html',
                    controller: 'ServiceCreateCtrl',
                    controllerAs:'serviceModal'
                });
                modalInstance.result
                .then(function(svc){
                  $state.go('service.dash',{ gotoId: svc._id});
                },function () {
                  $state.go('service.dash');
                })
              }],
        onExit:['$state',function($state){
          if (modalInstance)
            modalInstance.close();

        }]
    });
  });
