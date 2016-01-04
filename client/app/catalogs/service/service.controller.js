'use strict';

(function() {

  class ServiceCtrl {
    constructor($scope, Service, $rootScope, $state, $stateParams, socket, $timeout) {
      this.services = [];
      $scope.gridOptions = {
        enableRowSelection: true,
        enableRowHeaderSelection: false,
        multiSelect: false,
        columnDefs: [{
          name: 'code',
          headerCellFilter: 'translate',
          displayName: 'Código',
          enableColumnMenu: false,
          width: 100
        }, {
          name: 'name',
          headerCellFilter: 'translate',
          displayName: 'Servicio',
          enableColumnMenu: false,
          cellTemplate: '<div  class="ui-grid-cell-contents"  title="TOOLTIP"> <a ui-sref="service.detail({id:row.entity._id})"> {{COL_FIELD CUSTOM_FILTERS}} </a></div>'
        }],
        onRegisterApi : function(gridApi){
          $scope.gridApi = gridApi;
        }
      };
      $rootScope.$on('$stateChangeSuccess', function(evt, toState, params) {
        if (toState.name== 'service.dash' && params.gotoId) {
          $scope.navigateToId = params.gotoId;
        }
      });


      Service.query().$promise.then(response => {
        $scope.gridOptions.data = response;
        socket.syncUpdates('service', $scope.gridOptions.data,function(event,item,arr){
          if (item._id == $scope.navigateToId && $scope.gridApi){
            $timeout(function(){
              var entity = _.findLast(arr,function(i){ return i._id==$scope.navigateToId});
              $scope.gridApi.core.scrollTo(entity);
              $scope.gridApi.selection.toggleRowSelection(entity);
            },100)
          }
        });
      });

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('service');
      });
    }
  }


  angular.module('affarisApp')
    .controller('ServiceCtrl', ServiceCtrl);

})();
