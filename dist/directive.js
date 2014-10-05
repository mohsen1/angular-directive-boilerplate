/*!
 * angular-directive-template
 * 
 * Version: 0.0.0 - 2014-10-05T09:41:09.242Z
 * License: MIT
 */


angular.module('the.directive', []).directive('theDirective', TheDirective);

function TheDirective() {
  var value = 0;

  return {
    restrict: 'AE',
    templateUrl: 'directive.html',
    replcae: true,
    link: function ($scope) {

      $scope.getValue = function () {
        return value;
      };
      $scope.increment = function () {
        value++;
      };
    }
  };
}

angular.module("the.directive").run(["$templateCache", function($templateCache) {$templateCache.put("directive.html","<div class=\"the-directive\"><div>value is {{getValue()}}</div><button ng-click=\"increment()\">+</button></div>");}]);