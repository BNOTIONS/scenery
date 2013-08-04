/*
 * scenery.js v0.1
 *
 * Assembled by BNOTIONS - Zach Forrester and Mark Reale
 * Copyright 2013, MIT License
 *
 */

var Thread = (function($,_){

	var Thread = function(options){
		var defaults = {
				element : 'body',
				property : 'opacity', 
				prop_start : 0, 
				prop_end : 1, 
				unit : '', 
				timeline_start : 0, 
				timeline_end : 10 
			},
			options = $.extend({}, defaults, options),
			start_props = $(options.element).css(options.property),
			self = this,
			self_env;

		$(window).on('scroll',function(){
			scrollProps = {};
			scrollProps.Y = $(window).scrollTop();
			self_env = self.environment();
			pct_complete = (scrollProps.Y/self.Doc.height);
			px_start = ((options.timeline_start/100) * (self.Doc.height - self.Window.height));
			px_end = ((options.timeline_end/100) * (self.Doc.height - self.Window.height));
			lengthOfAnimation = px_end - px_start;
			
			if(options.timeline_start < pct_complete*100 && options.timeline_end > pct_complete*100){
				
				pctAnimationComplete = ((scrollProps.Y - px_start) / lengthOfAnimation);

				$(options.element).css(options.property, options.prop_start + ((options.prop_end - options.prop_start) * (pctAnimationComplete)) + options.unit);
				
			}
			if(pct_complete*100 < options.timeline_start){
				$(options.element).css(options.property,(options.start_props + options.unit));
			}

			if(pct_complete*100 > options.timeline_end){
				$(options.element).css(options.property,(options.prop_end + options.unit));
			}
		});
	}

	Thread.prototype = {

		environment : function(){
			this.Window = {};
			this.Doc = {};
			this.Window.height = $(window).height();
			this.Window.width = $(window).width();
			this.Doc.height = $(document).height();
			this.Doc.width = $(document).width();
			
		}
	}

	return Thread;
})($,_);

// Creating Complete Movie
var GenerateMovie = (function($,_){
	var GenerateMovie = function(options){
		var defaults = {
				scenes: 7,
				scene_length: 'window',
				timeline_ele: 'html',
				stage_ele: '#stage',
				stage_height: 'window',
				scene_mgr: 'body' 
			},
			options = $.extend({}, defaults, options),
			environment,
			timeline,
			scene_switch;

		if(options.scene_length == 'window'){
			environment = this.environment();
			options.scene_length = this.Window.height;
		}

		$(options.stage_ele).css ({
			position: 'fixed',
			width: '100%'
		});

		timeline = this.timeline(options.scenes, options.scene_length, options.timeline_ele, options.stage_ele, options.stage_height, options.scene_mgr);

		scene_switch = _.bind(this.sceneSwitches, this, options.scenes, options.scene_length, options.scene_mgr);
		
		$(window).on('scroll',scene_switch);
	}

	GenerateMovie.prototype = {

		environment : function(){
			this.Window = {};
			this.Doc = {};
			this.Window.height = $(window).height();
			this.Window.width = $(window).width();
			this.Doc.height = $(document).height();
			this.Doc.width = $(document).width();
			
		},

		timeline : function(scenes, scene_length, timeline_ele, stage_ele, stage_height, scene_mgr){
			$(timeline_ele).css({
				height: scene_length * scenes + 'px'
			});
			$(scene_mgr).addClass('scene-1');
			if(stage_height = 'window'){
				$(stage_ele).css({
					height: scene_length + 'px'
				});
			}
		},

		sceneSwitches : function(scenes, scene_length, scene_mgr){
			console.log('# sc ' + scenes);
			console.log('s len ' + scene_length);

			scrollProps = {};
			scrollProps.Y = $(window).scrollTop();
			
			console.log(scrollProps.Y);

			for(i = 1; i <= scenes; i++){
				if((scrollProps.Y + 20) >= scene_length * i){
					$(scene_mgr).addClass('scene-' + (i + 1));
				}
				if((scrollProps.Y + 20) < scene_length * i){
					$(scene_mgr).removeClass('scene-' + (i + 1));

				}
			}
			console.log(i);
		}
	}
	return GenerateMovie;
})($,_);