'use strict';

angular.module('affarisApp')
  .controller('ProjectCtrl', function ($scope) {
    $scope.message = 'Hello';
    // $scope.$on('$stateChangeSuccess', function(toState) {
    //   if ($state.includes("project") && !$state.is("project")) {
    //     $scope.selected = $state.current.name.split(".").slice(1, 2).pop();
    //   }
    // })
  });
