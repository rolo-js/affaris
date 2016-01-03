'use strict';
(function() {

class ServiceCreateCtrl {

  constructor($scope, $uibModalInstance,Service) {
    this.modalInstance = $uibModalInstance;
    this.scope = $scope;
    this.newService ={};
    this.Svc = Service;
  }
  ok(){
    let item = new this.Svc(this.newService);
    let mi = this.modalInstance;
    item.code = item.code.toUpperCase();
    item.$save({},function(svc){
      mi.close(svc);
    });
  }
  cancel(){
    this.modalInstance.dismiss('cancel');
  }
}

ServiceCreateCtrl.$inject = ['$scope','$uibModalInstance','Service'];
angular.module('affarisApp')
  .controller('ServiceCreateCtrl',ServiceCreateCtrl);

})();
