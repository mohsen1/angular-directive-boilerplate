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
