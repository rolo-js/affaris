'use strict';

angular.module('affarisApp')
  .directive('uniqServiceCode', function($q,$timeout,Service) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var codes = ['EPT', 'AUD', 'VOI'];

        ctrl.$asyncValidators.servicecode = function(modelValue, viewValue) {
          modelValue = modelValue.toUpperCase();
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty model valid
            return $q.when();
          }

          var def = $q.defer();

          Service.get({code:modelValue},
            function(res){
              def.reject(res);
            },
            function(err){
              if (err.status==404){
                def.resolve();
              } else{
                console.log(err);
              }
            }
          );


          return def.promise;
        };
      }
    };
  });
