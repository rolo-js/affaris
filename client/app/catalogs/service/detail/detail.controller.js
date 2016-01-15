'use strict';
(function() {

  class ServiceDetailCtrl {
    constructor($scope, $stateParams) {
      $scope.message = $stateParams.id;
      $scope.data = [{
        'id': 1,
        'title': 'node1',
        'isDir':true,
        'nodes': [{
          'id': 11,
          'title': 'node1.1',
        'isDir':true,
          'nodes': [{
            'id': 111,
            'title': 'node1.1.1',
            'nodes': []
          }]
        }, {
          'id': 12,
          'title': 'node1.2',
          'nodes': []
        }]
      }, {
        'id': 2,
        'title': 'node2',
        'isDir':true,
        'nodes': [{
          'id': 21,
          'title': 'node2.1',
          'nodes': []
        }, {
          'id': 22,
          'title': 'node2.2',
          'nodes': []
        }]
      }, {
        'id': 3,
        'title': 'node3',
        'isDir':true,
        'nodes': [{
          'id': 31,
          'title': 'node3.1',
          'nodes': []
        }]
      }, {
        'id': 4,
        'title': 'node4',
        'isDir':true,
        'nodes': [{
          'id': 41,
          'title': 'node4.1',
          'nodes': []
        }]
      }];

    }

    getIcon(node,collapsed){
      let icon = 'dir fa-folder';
      if (node.isDir){

        if (!collapsed){
          icon += '-open';
        }
        if (!(node.nodes && node.nodes.length)){
          icon += '-o'
        }
      }
      else{
        icon = 'fa-file-pdf-o'
      }
      return icon;
    }

    newSubItem(scope) {
      var nodeData = scope.$modelValue;
      nodeData.nodes.push({
        id: nodeData.id * 10 + nodeData.nodes.length,
        title: nodeData.title + '.' + (nodeData.nodes.length + 1),
        nodes: []
      });
      nodeData.isDir = true;
    }

    toggle(scope){
      scope.toggle();
    }

    remove(scope){
      scope.remove();
    }

  }

  angular.module('affarisApp')
    .controller('ServiceDetailCtrl', ServiceDetailCtrl);

})();
