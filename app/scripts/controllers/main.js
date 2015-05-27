'use strict';

/**
 * @ngdoc function
 * @name webAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webAngularApp
 */
angular.module('webAngularApp')
  .controller('MainCtrl', function ($scope, $location) {
  	angular.element(document).ready(function () {

      $scope.isActive = function (viewLocation) {
        var locationPath = $location.path(),
        location = locationPath.split('/');
        locationPath = '/'+location[1];
        return viewLocation === locationPath;
      };

      var mainmenu = function(){
        $('#main-menu ul:first li').hover(function(){
          $(this).find('ul:first').stop().fadeIn('slow');
        },function(){
          $(this).find('ul:first').stop().fadeOut('fast');
        });
      };

      mainmenu();

      /* Main Menu */
      $("#main-menu ul li:has(ul)").each(function(){
        $(this).addClass("hasSubmenu");
      });
      
      /* Mibile Nav */  
      $('#main-menu > ul').mobileMenu({
        defaultText: 'Navigate to...',
        className: 'mobile-menu',
        subMenuDash: '&ndash;&nbsp;'
      });
      
      /*Tabs*/
      if($('ul.tabs').length > 0) {
        $('ul.tabs').tabs('> .tabs-content');
      }
      
      if($('ul.tabs-frame').length > 0) {
        $('ul.tabs-frame').tabs('> .tabs-frame-content');
      }
      
      if($('.tabs-vertical-frame').length > 0){
        $('.tabs-vertical-frame').tabs('> .tabs-vertical-frame-content');
        $('.tabs-vertical-frame').each(function(){
          $(this).find("li:first").addClass('first').addClass('current');
          $(this).find("li:last").addClass('last');
        });
        
        $('.tabs-vertical-frame li').click(function(){ 
          $(this).parent().children().removeClass('current');
          $(this).addClass('current');
        });
        
      }

      $('#layerslider').layerSlider({
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

      /*Google Maps*/
      var $map = $('#map');
      if( $map.length ) {
        $map.gMap({
          addres: 'Av. Nazca 1025, Buenos Aires, Capital Federal',
          zoom: 17,
          markers: [ {
            address: 'Av. Nazca 1025, Buenos Aires, Capital Federal'
          }]
        });
      }

  	});
  });
