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

    $scope.isActive = function (viewLocation) {
      var locationPath = $location.path(),
      location = locationPath.split('/');
      locationPath = '/'+location[1];
      return viewLocation === locationPath;
    };

    $scope.sideNavActive = 'mamparas';

    $scope.setSideNavItem = function (item){
      $scope.sideNavActive = item;
    };

    /* Mibile Nav */  
    $scope.mobileMenu = {
      defaultText: 'Navigate to...',
      className: 'mobile-menu',
      subMenuDash: '&ndash;&nbsp;'
    };
    
    /*Tabs*/
    // if($('ul.tabs').length > 0) {
    //   $('ul.tabs').tabs('> .tabs-content');
    // }
    
    // if($('ul.tabs-frame').length > 0) {
    //   $('ul.tabs-frame').tabs('> .tabs-frame-content');
    // }
    
    // if($('.tabs-vertical-frame').length > 0){
    //   $('.tabs-vertical-frame').tabs('> .tabs-vertical-frame-content');
    //   $('.tabs-vertical-frame').each(function(){
    //     $(this).find("li:first").addClass('first').addClass('current');
    //     $(this).find("li:last").addClass('last');
    //   });
      
    //   $('.tabs-vertical-frame li').click(function(){ 
    //     $(this).parent().children().removeClass('current');
    //     $(this).addClass('current');
    //   });
      
    // }

    $scope.layerSlider= {
      skinsPath : 'layerslider-skins/',
      skin : 'fullwidthdark',
      thumbnailNavigation : 'hover',
      hoverPrevNext : false,
      responsive : false,
      responsiveUnder : 1120,
      sublayerContainer : 1060,
      width : '100%',
      height : '500px'
    };

    /*Google Maps*/
    $scope.mapConfig = {
        addres: 'Av. Nazca 1025, Buenos Aires, Capital Federal',
        zoom: 16,
        markers: [ {
          address: 'Av. Nazca 1025, Buenos Aires, Capital Federal'
        }]
      };

    /*Portfolio Carousel*/
    $scope.carouselOptions = {
      responsive: true,
      auto: false,
      width: '100%',
      prev: '.portfolio-prev-arrow',
      next: '.portfolio-next-arrow',
      height: 'auto',
      scroll: 1,        
      items: {
        width: 340,
        visible: {
          min: 1,
          max: 3
        }
      }       
    };
    
    /*Pretty Photo*/
    $scope.prettyPhotoOptions = {
      hook:'data-gal',  
      animation_speed:'normal',
      theme:'light_square',
      slideshow:3000,
      autoplay_slideshow: false,
      social_tools: false,
      deeplinking:false
    }

  });
