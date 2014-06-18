
/**
 * jQuery Unleash v1.1
 *
 * Accordion jQuery image slider
 *
 * Created by Ali Alaa 2011-2012
 *
 * http://themeforest.net/user/alialaa
 *
 */ 

(function(a){a.fn.unleash=function(b){var c=a.extend({},a.fn.unleash.defaults,b);a.fn.unleash.defaults={duration:700,childClassName:".box",captionClassName:".caption_1",captionMargin:"20px",SliderWidth:"960px",SliderHeight:"300px",width:600,Event:"hover",easing:"quadEaseOut",captionEasing:"backEaseInOut",CollapseOnMouseLeave:true,CaptionAnimation:"opacity"};return this.each(function(){function f(){b.find(c.childClassName).each(function(d){var e=a(this);e.stop().animate({left:d*b.width()/b.find(c.childClassName).size()+"px"},{queue:false,duration:c.duration,easing:c.easing})});switch(c.CaptionAnimation){case"pop-up":b.find(c.captionClassName).each(function(b){var d=a(this);d.animate({bottom:-a(this).outerHeight(true)-5},{queue:false,duration:c.duration,easing:c.captionEasing});});break;case"opacity":b.find(c.captionClassName).stop().animate({opacity:0},{queue:false,duration:c.duration,easing:c.easing});break;case"rotate":b.find(c.captionClassName).each(function(b){var d=a(this);if(c.Event=="click"){d.animate({rotate:-90},{queue:true,duration:c.duration,easing:c.captionEasing});d.animate({bottom:-(.5*a(this).outerHeight(true)+.5*a(this).outerWidth(true))},{queue:true,duration:c.duration,easing:c.captionEasing})}else{if(c.Event=="hover"){d.stop().animate({rotate:-90},{queue:true,duration:c.duration,easing:c.captionEasing});d.stop().animate({bottom:-(.5*a(this).outerHeight(true)+.5*a(this).outerWidth(true))},{queue:true,duration:c.duration,easing:c.captionEasing})}}});break}}var b=a(this);var d=c.width;if(c.SliderWidth.replace("px","")>a(window).width()){c.width=d*(a(window).width()/c.SliderWidth.replace("px",""));b.css("width",c.SliderWidth.replace("px","")*(a(window).width()/c.SliderWidth.replace("px","")));b.find(c.childClassName).each(function(d){a(this).css({left:d*b.width()/b.find(c.childClassName).size()+"px"});b.find(c.captionClassName).width(c.width-2*a(c.captionClassName).css("paddingRight").replace("px","")-2*a(c.captionClassName).css("marginRight").replace("px","")-a(c.captionClassName).css("border-left-width").replace("px","")-a(c.captionClassName).css("border-right-width").replace("px",""))})}else{c.width=d;b.css("width",c.SliderWidth);b.find(c.captionClassName).width(c.width-2*a(c.captionClassName).css("paddingRight").replace("px","")-2*a(c.captionClassName).css("marginRight").replace("px","")-a(c.captionClassName).css("border-left-width").replace("px","")-a(c.captionClassName).css("border-right-width").replace("px",""))}if(c.SliderHeight.replace("px","")>a(window).height()){b.css("height",c.SliderHeight.replace("px","")*(a(window).height()/c.SliderHeight.replace("px","")));b.find(c.childClassName).css("height",c.SliderHeight.replace("px","")*(a(window).height()/c.SliderHeight.replace("px","")))}else{b.css("height",c.SliderHeight);b.find(c.childClassName).css("height",c.SliderHeight)}var e=b.width()/b.find(c.childClassName).size();b.find(c.childClassName).each(function(b){a(this).css({left:b*e+"px"})});a(window).resize(function(){f();if(c.SliderWidth.replace("px","")>a(window).width()){c.width=d*(a(window).width()/c.SliderWidth.replace("px",""));b.css("width",c.SliderWidth.replace("px","")*(a(window).width()/c.SliderWidth.replace("px","")));b.find(c.childClassName).each(function(d){a(this).animate({left:d*b.width()/b.find(c.childClassName).size()+"px"},{queue:false,duration:c.duration,easing:c.easing})});b.find(c.captionClassName).width(c.width-2*a(c.captionClassName).css("paddingRight").replace("px","")-2*a(c.captionClassName).css("marginRight").replace("px","")-a(c.captionClassName).css("border-left-width").replace("px","")-a(c.captionClassName).css("border-right-width").replace("px",""))}else{c.width=d;b.css("width",c.SliderWidth);b.find(c.childClassName).each(function(d){a(this).animate({left:d*c.SliderWidth.replace("px","")/b.find(c.childClassName).size()+"px"},{queue:false,duration:c.duration,easing:c.easing})});b.find(c.captionClassName).width(c.width-2*a(c.captionClassName).css("paddingRight").replace("px","")-2*a(c.captionClassName).css("marginRight").replace("px","")-a(c.captionClassName).css("border-left-width").replace("px","")-a(c.captionClassName).css("border-right-width").replace("px",""))}if(c.SliderHeight.replace("px","")>a(window).height()){b.animate({height:c.SliderHeight.replace("px","")*(a(window).height()/c.SliderHeight.replace("px",""))},{queue:false,duration:c.duration,easing:c.easing});b.find(c.childClassName).animate({height:c.SliderHeight.replace("px","")*(a(window).height()/c.SliderHeight.replace("px",""))},{queue:false,duration:c.duration,easing:c.easing})}else{b.animate({height:c.SliderHeight},{queue:false,duration:c.duration,easing:c.easing});b.find(c.childClassName).animate({height:c.SliderHeight},{queue:false,duration:c.duration,easing:c.easing})}});switch(c.CaptionAnimation){case"pop-up":b.find(c.captionClassName).each(function(b){var c=a(this);c.css({bottom:-a(this).outerHeight(true)-5})});break;case"opacity":b.find(c.captionClassName).each(function(b){var c=a(this);c.css({bottom:0});c.css({opacity:0})});break;case"rotate":b.find(c.captionClassName).each(function(b){var d=a(this);d.css({marginBottom:"0px"});d.width(c.SliderHeight.replace("px","")-2*d.css("paddingRight").replace("px","")-2*d.css("marginRight").replace("px",""));d.css({bottom:-(.5*a(this).outerHeight(true)+.5*a(this).outerWidth(true))});d.rotate("-90deg")});break}if(c.Event=="hover"){b.find(c.childClassName).hover(function(){var d=a(this);var e=(b.width()-c.width)/(b.find(c.childClassName).size()-1);if(d.width()==b.find(c.childClassName).width()||d.width()==e){b.find(c.childClassName).removeClass("featured");d.addClass("featured");var f=b.find(c.childClassName).index(this);b.children("div").each(function(b){var d=a(this);if(b==0){d.stop().animate({left:"0px"},{queue:false,duration:c.duration,easing:c.easing})}else{if(b==f){d.stop().animate({left:b*e+"px"},{queue:false,duration:c.duration,easing:c.easing})}else{if(b<f){d.stop().animate({left:b*e+"px"},{queue:false,duration:c.duration,easing:c.easing})}else{if(b>f){d.stop().animate({left:c.width+(b-1)*e+"px"},{queue:false,duration:c.duration,easing:c.easing})}}}}});switch(c.CaptionAnimation){case"pop-up":b.find(c.captionClassName).each(function(b){var d=a(this);d.animate({bottom:-d.outerHeight(true)-5},{queue:false,duration:c.duration,easing:c.captionEasing})});b.find(".featured").find(c.captionClassName).animate({bottom:"0px"},{queue:false,duration:c.duration,easing:c.captionEasing});break;case"opacity":b.find(c.captionClassName).stop().animate({opacity:0},{queue:false,duration:c.duration,easing:c.easing});b.find(".featured").find(c.captionClassName).stop().animate({opacity:.8},{queue:false,duration:c.duration,easing:c.easing});break;case"rotate":b.find(c.captionClassName).each(function(b){var d=a(this);d.stop().animate({rotate:-90},{queue:true,duration:c.duration,easing:c.captionEasing});d.stop().animate({bottom:-(.5*d.outerHeight(true)+.5*d.outerWidth(true))},{queue:true,duration:c.duration,easing:c.captionEasing})});b.find(".featured").find(c.captionClassName).stop().animate({bottom:.1*a(this).outerHeight(true)},{queue:true,duration:c.duration,easing:c.captionEasing});b.find(".featured").find(c.captionClassName).animate({rotate:0},{queue:true,duration:c.duration,easing:c.captionEasing});break}}})}else{if(c.Event=="click"){b.find(c.childClassName).click(function(){var d=a(this);var e=(b.width()-c.width)/(b.find(c.childClassName).size()-1);if(d.width()==a(c.childClassName).width()||d.width()==e){b.find(c.childClassName).removeClass("featured");d.addClass("featured");var f=b.find(c.childClassName).index(this);b.children("div").each(function(b){var d=a(this);if(b==0){d.animate({left:"0px"},{queue:false,duration:c.duration,easing:c.easing})}else{if(b==f){d.animate({left:b*e+"px"},{queue:false,duration:c.duration,easing:c.easing})}else{if(b<f){d.animate({left:b*e+"px"},{queue:false,duration:c.duration,easing:c.easing})}else{if(b>f){d.animate({left:c.width+(b-1)*e+"px"},{queue:false,duration:c.duration,easing:c.easing})}}}}});switch(c.CaptionAnimation){case"pop-up":b.find(c.captionClassName).each(function(b){var d=a(this);d.animate({bottom:-d.outerHeight(true)-5},{queue:false,duration:c.duration,easing:c.captionEasing});});b.find(".featured").find(c.captionClassName).animate({bottom:"0px"},{queue:false,duration:c.duration,easing:c.captionEasing});break;case"opacity":b.find(c.captionClassName).animate({opacity:0},{queue:false,duration:c.duration,easing:c.easing});b.find(".featured").find(c.captionClassName).animate({opacity:1},{queue:false,duration:c.duration,easing:c.easing});break;case"rotate":b.find(c.captionClassName).each(function(b){var d=a(this);d.animate({rotate:-90},{queue:true,duration:c.duration,easing:c.captionEasing});d.animate({bottom:-(.5*d.outerHeight(true)+.5*d.outerWidth(true))},{queue:true,duration:c.duration,easing:c.captionEasing})});b.find(".featured").find(c.captionClassName).stop().animate({bottom:.1*a(this).outerHeight(true)},{queue:true,duration:c.duration,easing:c.captionEasing});b.find(".featured").find(c.captionClassName).stop().animate({rotate:0},{queue:true,duration:c.duration,easing:c.captionEasing});break}}})}}if(c.CollapseOnMouseLeave){b.mouseleave(function(){f()})}})}})(jQuery)