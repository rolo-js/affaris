'use strict';

angular.module('affarisApp.translate')
  .directive('languageSelector', function(LocaleService) {
    return {
      templateUrl: 'components/translate/languageSelector/languageSelector.html',
      restrict: 'A',
      replace: true,

      controller: function($scope) {
        $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
        $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
        $scope.visible = $scope.localesDisplayNames &&
          $scope.localesDisplayNames.length > 1;

        $scope.changeLanguage = function(locale) {
          LocaleService.setLocaleByDisplayName(locale);
          $scope.currentLocaleDisplayName = locale;
        };
      }
    };
  });
