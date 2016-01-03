'use strict';

angular.module('affarisApp.translate', [
    'pascalprecht.translate', // angular-translate
    'tmh.dynamicLocale' // angular-dynamic-locale
  ])
  .constant('LOCALES', {
    'locales': {
      'es-MX': 'Español',
      'en-US': 'English'
    },
    'preferredLocale': 'es_MX'
  })
  .config(function($translateProvider, tmhDynamicLocaleProvider) {
    //$translateProvider.useSanitizeValueStrategy('sanitize'); // Se quito porque estaba escapando los acentos
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/locales/locale-', // path to translations files
      suffix: '.json' // suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('es-MX'); // is applied on first load
    $translateProvider.useLocalStorage(); // saves selected language to localStorage
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');

  });
