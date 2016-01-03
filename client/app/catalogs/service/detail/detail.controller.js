'use strict';
(function() {

class ServiceDetailCtrl {
  constructor($scope, $stateParams) {
    $scope.message = $stateParams.id;
  }
}

angular.module('affarisApp')
  .controller('ServiceDetailCtrl', ServiceDetailCtrl);

})();
