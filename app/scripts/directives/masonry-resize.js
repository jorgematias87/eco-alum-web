'use strict';

/**
 * @ngdoc directive
 * @name webAngularApp.directive:masonryResize
 * @description
 * # masonryResize
 */
angular.module('webAngularApp')
  .directive('masonryResize', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

      	//set initial height
      	setTimeout(function(){
      	  var masonryContainer = (element.height() / 2) + 50;
      	  element.height(masonryContainer);
      	}, 1000);

      	//reload items resize
      	$(window).bind("resize",function(e){
      		element.masonry('reloadItems');
      	}).resize();
      }
    };
  });
