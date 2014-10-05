'use strict';

describe('the-directive', function () {
  var scope, $compile, $rootScope, $compile, element;

  function createDirective() {
    var elm;

    elm = angular.element('<the-directive></the-directive>');
    angular.element(document.body).prepend(elm);
    $compile(elm)(scope);
    scope.$digest();

    return elm;
  }

  beforeEach(module('ngSanitize', 'the.directive'));
  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  afterEach(function () {
    if (element) element.remove();
  });

  describe('when created', function () {

    it('initial of the value should be 0', function () {
      element = createDirective();

      expect(element.text()).toContain('0');
    });
  });
});