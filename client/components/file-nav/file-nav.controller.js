'use strict';
(function() {

  class FileNavCtrl {
    constructor($scope) {
      $scope.type = $scope.docInfo.type;
      if ($scope.docInfo.type.startsWith('proposal'))
      $scope.list = ['uno', 'dos', 'tres'];
      if ($scope.docInfo.type.startsWith('project'))
      $scope.list = ['tres', 'cuatro', 'cinco','seis'];
    }
  }


angular.module('affarisApp')
  .controller('FileNavCtrl',FileNavCtrl);

})();
