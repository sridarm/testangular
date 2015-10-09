(function() {
  'use strict';

  angular
    .module('testangular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
