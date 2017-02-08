(function () {
  'use strict';

  angular.module('angular.bulma')
    .directive('blmButton', [function () {
      return {
        restrict: 'E',
        transclude: true,
        template: '<div class="button {{cssClass}}" transclude></div>'
      };
    }]);

})();
