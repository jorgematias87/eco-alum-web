'use strict';

describe('Directive: masonryResize', function () {

  // load the directive's module
  beforeEach(module('webAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<masonry-resize></masonry-resize>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the masonryResize directive');
  }));
});
