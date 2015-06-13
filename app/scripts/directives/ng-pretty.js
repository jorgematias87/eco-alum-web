'use strict';

/**
 * @ngdoc directive
 * @name webAngularApp.directive:ngPretty
 * @description
 * # ngPretty
 */
 angular.module('webAngularApp')
 .directive('prettyp', function(){
 	return function(scope, element, attrs) {
 		console.log(element);
 		$("[rel^='prettyPhoto']").prettyPhoto(
	 		{
	 			animation_speed:'normal',
	 			theme:'light_square',
	 			slideshow:3000, 
	 			autoplay_slideshow: false,
	 			social_tools: false
	 		}
 		);
 	}
 })
