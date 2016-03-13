'use strict';
(function() {

  class ServiceDetailCtrl {
    constructor($scope, $stateParams,currentService) {
      $scope.svc = currentService;
    }
  }

  angular.module('affarisApp')
    .controller('ServiceDetailCtrl', ServiceDetailCtrl);

})();
