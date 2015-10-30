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
