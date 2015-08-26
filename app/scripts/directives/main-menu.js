'use strict';

/**
 * @ngdoc directive
 * @name webAngularApp.directive:mainMenu
 * @description
 * # mainMenu
 */
angular.module('webAngularApp')
  .directive('mainMenu', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
	    /* Main Menu */
	    $(element).find('ul:first li').hover(function(){
	    	$(this).find('ul:first').stop().fadeIn('slow');
	    },function(){
	    	$(this).find('ul:first').stop().fadeOut('fast');
	    });

	    $(element).find('ul li:has(ul)').each(function(){
	      $(this).addClass("hasSubmenu");
	    });
      }
    };
  });
