'use strict';
(function() {

  class ServiceDocsCtrl {
    constructor($scope, $stateParams, $state, currentService) {
      $scope.message = $state.current.data.type;
      $scope.docpath = {
        id: currentService._id,
        type: $state.current.data.type
      };
    }
  }


angular.module('affarisApp')
  .controller('ServiceDocsCtrl',ServiceDocsCtrl);

})();
