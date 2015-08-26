'use strict';

/**
 * @ngdoc directive
 * @name webAngularApp.directive:toggleAccordion
 * @description
 * # toggleAccordion
 */
angular.module('webAngularApp')
  .directive('toggleAccordion', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        /*Toggle shortcode*/
          jQuery('.toggle').toggle(function(){ jQuery(this).addClass('active'); },function(){ jQuery(this).removeClass('active'); });
          jQuery('.toggle').click(function(){ jQuery(this).next('.toggle-content').slideToggle(); });
          jQuery('.toggle-frame-set').each(function(){
            var $this = jQuery(this),
                $toggle = $this.find('.toggle-accordion');
            
            $toggle.click(function(){
              if( jQuery(this).next().is(':hidden') ) {
                $this.find('.toggle-accordion').removeClass('active').next().slideUp();
                jQuery(this).toggleClass('active').next().slideDown();
              }
              return false;
            });
            
            //Activate First Item always
            $this.find('.toggle-accordion:first').addClass("active");
            $this.find('.toggle-accordion:first').next().slideDown();
          });/* Toggle Shortcode end*/
      }
    };
  });
