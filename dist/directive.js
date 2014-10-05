/*!
 * angular-directive-template
 * 
 * Version: 0.0.0 - 2014-10-05T09:25:37.622Z
 * License: MIT
 */


angular.module("the.directive").run(["$templateCache", function($templateCache) {$templateCache.put("directive.html","<div class=\"the-directive\"><div>value is {{value}}</div><button ng-click=\"increment()\"></button></div>");}]);
angular.module('the.directive', []).directive('the.directive', TheDirective);

function TheDirective() {
  return {
    restrict: 'AE',
    template: 'src/directive.html',
    replcae: true,
    link: function ($scope) {
      var value = 0;

      $scope.getValue = function () {
        return value;
      };
      $scope.increment = function () {
        value++;
      };
    }
  };
}
