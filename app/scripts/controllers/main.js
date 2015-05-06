'use strict';

/**
 * @ngdoc function
 * @name webAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webAngularApp
 */
angular.module('webAngularApp')
  .controller('MainCtrl', function ($scope) {
  	angular.element(document).ready(function () {
  		jQuery('#layerslider').layerSlider({
  			skinsPath : 'layerslider-skins/',
  			skin : 'fullwidthdark',
  			thumbnailNavigation : 'hover',
  			hoverPrevNext : false,
  			responsive : false,
  			responsiveUnder : 1120,
  			sublayerContainer : 1060,
  			width : '100%',
  			height : '500px'
  		});
  	});
  });
