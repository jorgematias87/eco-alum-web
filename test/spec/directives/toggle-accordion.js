'use strict';

describe('Directive: toggleAccordion', function () {

  // load the directive's module
  beforeEach(module('webAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<toggle-accordion></toggle-accordion>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the toggleAccordion directive');
  }));
});
