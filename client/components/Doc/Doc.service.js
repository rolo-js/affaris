'use strict';

angular.module('affarisApp')
  .factory('Doc', function () {
        return $resource('/api/doc/:id',{} ,
        {
          'update':{
            method:'PUT'
          }
        }
        );
  });
