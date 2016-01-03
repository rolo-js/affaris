'use strict';

(function() {

  class ServiceCtrl {
    constructor($scope, Service, $rootScope, $state, $stateParams, socket) {
      this.services = [];
      console.log('constructing servceCtrl');
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
        }]
      };
      $rootScope.$on('$stateChangeSuccess', function(evt, toState, params) {
        if ($state.is(toState, 'service.dash')) {
        }
      });


      Service.query().$promise.then(response => {
        $scope.gridOptions.data = response;
        socket.syncUpdates('service', $scope.gridOptions.data);
      });

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('service');
      });
    }
  }


  angular.module('affarisApp')
    .controller('ServiceCtrl', ServiceCtrl);

})();
