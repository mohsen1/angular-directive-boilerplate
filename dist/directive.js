/*!
 * angular-directive-boilerplate
 * 
 * Version: 0.0.5 - 2014-10-06T04:21:35.698Z
 * License: MIT
 */


'use strict';

angular.module('the.directive', []).directive('theDirective', function () {
  var value = 0;

  return {
    restrict: 'AE',
    templateUrl: 'directive.html',
    replace: true,
    link: function ($scope) {

      $scope.getValue = function () {
        return value;
      };
      $scope.increment = function () {
        value++;
      };
    }
  };
});
angular.module("the.directive").run(["$templateCache", function($templateCache) {$templateCache.put("directive.html","<div class=\"the-directive\"><div>The value is {{getValue()}}</div><button ng-click=\"increment()\">+</button></div>");}]);