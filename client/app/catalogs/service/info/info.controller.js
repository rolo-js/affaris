'use strict';
(function() {

  class ServiceInfoCtrl {
    constructor($scope, currentService) {
       this.svc = currentService;
        $scope.svc = currentService;
    }
    save(frm){
      this.svc.$update({id:this.svc._id},function(){
        frm.$setPristine();
        frm.$setUntouched();
      });
    }
  }

  angular.module('affarisApp')
    .controller('ServiceInfoCtrl', ServiceInfoCtrl);

})();
