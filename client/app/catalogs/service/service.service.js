'use strict';


angular.module('affarisApp')
  .factory('Service', function ($resource) {
    return $resource('/api/services/:id',{} ,
    {
      'update':{
        method:'PUT'
      }
    }
    );
  });
