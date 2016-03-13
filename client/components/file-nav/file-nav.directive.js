'use strict';

angular.module('affarisApp')
  .directive('fileNav', function () {
    return {
      templateUrl: 'components/file-nav/file-nav.html',
      restrict: 'EA',
      // link: function (scope, element, attrs) {
      // },
      scope:{
        docInfo:'=docsPath'
      },
      controller: 'FileNavCtrl'
    };
  });
