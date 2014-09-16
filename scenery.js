/*
 * scenery.js v0.1
 *
 * Assembled by BNOTIONS - Zach Forrester and Mark Reale
 * Copyright 2013, MIT License
 *
 */

// Creating Complete Movie
var Scenery = (function($,_){

	var Scenery = function(options){

		var defaults = {
			scenes: 7,
			scene_length: 'window',
			timeline_ele: 'html',
			stage_ele: '#stage',
			stage_height: 'window',
			scene_mgr: 'body',
			main_ele: null
		},
		options = $.extend({}, defaults, options),
		environment,
		timeline,
		scene_switch;

		if(options.main_ele){
			environment = this.environment();
			main_height = $(options.main_ele).outerHeight();
			if(main_height > this.Window.height){
				var woffset = main_height - this.Window.height;
				var mainThread = new Thread({
					element: options.main_ele,
					property: 'top',
					prop_start: 0,
					prop_end: -woffset,
					unit: 'px',
					timeline_start: 0,
					timeline_end: 100
				});
			}
		}

		$(options.stage_ele).css ({
			position: 'fixed',
			width: '100%',
			top: 0,
			left: 0
		});

		timeline = this.timeline(options.scenes, options.scene_length, options.timeline_ele, options.stage_ele, options.stage_height, options.scene_mgr);

		scene_switch = _.bind(this.sceneSwitches, this, options.scenes, options.scene_length, options.scene_mgr);
		$(window).on('scroll',scene_switch);

		movie_resize = _.bind(this.movieResize, this, options.scene_length, options.stage_ele, options.stage_height);
		$(window).on('resize',movie_resize);

	}

	Scenery.prototype = {

		environment : function(){
			this.Window = {};
			this.Doc = {};
			this.Window.height = $(window).height();
			this.Window.width = $(window).width();
			this.Doc.height = $(document).height();
			this.Doc.width = $(document).width();
			
		},

		timeline : function(scenes, scene_length, timeline_ele, stage_ele, stage_height, scene_mgr){
			environment = this.environment();
			if(scene_length == 'window'){
				scene_length = this.Window.height;
			}

			$(timeline_ele).css({
				height: scene_length * scenes + 'px'
			});
			
			$(scene_mgr).addClass('scene-1');
			
			if(stage_height == 'window'){
				$(stage_ele).css({
					height: this.Window.height + 'px'
				});
			}

		},

		sceneSwitches : function(scenes, scene_length, scene_mgr){
			if(scene_length == 'window'){
				scene_length = this.Window.height;
			}
			scrollProps = {};
			scrollProps.Y = $(window).scrollTop();
			
			for(i = 1; i <= scenes; i++){
				if((scrollProps.Y + 20) >= scene_length * i){
					$(scene_mgr).addClass('scene-' + (i + 1));
				}
				if((scrollProps.Y + 20) < scene_length * i){
					$(scene_mgr).removeClass('scene-' + (i + 1));

				}
			}
		},

		movieResize : function(scene_length, stage_ele, stage_height){
			var self = this;
			environment = this.environment();
			if(scene_length == 'window'){
				scene_length = this.Window.height;
			}

			if(stage_height == 'window'){
				$(stage_ele).css({
					height: scene_length + 'px'
				});
			}	
		}
	}
	return Scenery;
})($,_);


// Create a Thread
var Thread = (function($){

	var Thread = function(options){

        var defaults = {
			element : 'body',
			property : 'opacity',
			prop_start : 0,
			prop_end : 1,
			unit : '',
			timeline_start : 0,
			timeline_end : 10,
			custom_class: false,
			trigger_class: false
		};

        this.$win = $(window);
        this.$doc = $(document);
        this.options = $.extend({}, defaults, options);

        this.$win.on('scroll', _.bind(this.scrollElm, this));

	}

	Thread.prototype = {
        scrollElm: function() {

            var scroll = {
                pos_y: this.$win.scrollTop(),
                pos_x: this.$win.scrollLeft()
            };

            var win = {
                height: this.$win.height(),
                width:  this.$win.width()
            };

            var doc = {
                height: this.$doc.height(),
                width:  this.$doc.width()
            };

            var opt = this.options,
                $elm =  $(opt.element),
                pct_complete = ((scroll.pos_y / (doc.height - win.height)*100)),
                px_start = ((opt.timeline_start/100) * (doc.height - win.height)),
                px_end = ((opt.timeline_end/100) * (doc.height - win.height)),
                animation_length = px_end - px_start,
                animation_pct = '';

             if(scroll.pos_y === 0){
                $elm.css(opt.property,(opt.prop_start + opt.unit));
             }

             if(opt.timeline_start < pct_complete && opt.timeline_end > pct_complete){

                if(opt.custom_class && pct_complete >= opt.trigger_class){
                    $elm.addClass(opt.custom_class);
                }

                animation_pct = ((scroll.pos_y - px_start) / animation_length);

                $elm.css(opt.property, (parseFloat(opt.prop_start) + parseFloat((opt.prop_end - opt.prop_start) * (animation_pct))) + opt.unit);
             }

             if(pct_complete < opt.timeline_start){
                 $elm.css(opt.property,(opt.prop_start + opt.unit));
             }

             if(pct_complete > opt.timeline_end){
                 $elm.css(opt.property,(opt.prop_end + opt.unit));
             }

        }

	}

	return Thread;
})($);

// // Creating a Stint
var Stint = (function($){
	var Stint = function(options){

		var defaults = {
			element : '#box-1',
			property : 'opacity',
			prop_start : 1,
			prop_end : 0,
			unit : '',
            speed : .15,
			timeline_start : false,
			timeline_end : false,
            custom_class: false,
            trigger_class: false
		};

        this.options = $.extend({}, defaults, options);

        this.win = {};
        this.elm = {};
        this.view = {};

        this.$win = $(window);
        this.$doc = $(document);
        this.$elm = $(this.options.element);

        this.elm.origin_top = this.getOriginalOffset();

        this.diff = this.options.prop_start - this.options.prop_end;
        this.distance = Math.abs(this.diff);
        this.direction = this.diff > 0 ? -1 : 1;

        this.bindEvents();


	};



	Stint.prototype = {

        scrollElm: function() {

            this.setEnvironment();

            var opt = this.options,
                animation_pct,
                animation_counter,
                animation_start,
                animation_top,
                pos_counter,
                timeline_offset = (opt.timeline_start / 100) * this.win.height,
                visible = this.isVisible();


            if( visible ){

                animation_top = opt.timeline_start ? ((this.elm.origin_top - this.view.top) - timeline_offset) : this.view.top;
                animation_pct = Math.abs(animation_top * opt.speed / 100);
                animation_counter = Math.abs(this.distance * animation_pct);
                pos_counter = opt.prop_start + (this.distance * animation_pct) * this.direction


                if ((opt.timeline_start && animation_top <= 0 && animation_counter <= this.distance) ||
                    !opt.timeline_start && animation_counter < this.distance) {

                    this.$elm.css(opt.property, pos_counter + opt.unit);

                }

            }

        },

        isVisible: function(){

            return  (this.elm.top <= this.view.bottom) && (this.elm.bottom >= this.view.top) &&
                    (this.elm.left <= this.view.right) && (this.elm.right >= this.view.left);
        },

		setEnvironment : function(){

            var elm_offset = this.$elm.offset();

			this.win.height = this.$win.height();
			this.win.width = this.$win.width();

			this.elm.height = this.$elm.height();
			this.elm.width = this.$elm.width();
			this.elm.top = elm_offset.top;
			this.elm.left = elm_offset.left;
			this.elm.bottom = this.elm.top + this.elm.height;
			this.elm.right = this.elm.left + this.elm.width;

			this.view.top = this.$win.scrollTop();
			this.view.left = this.$win.scrollLeft();
			this.view.bottom = (this.view.top + this.win.height);
			this.view.right = (this.view.left + this.win.width);
		},

        bindEvents: function(){

            this.$win.on('scroll', _.bind(this.scrollElm, this));
            this.$win.on('resize', _.bind(this.setEnvironment, this));

        },

        getOriginalOffset: function() {

            return this.$elm.offset().top;

        },

        getPropValue: function() {

            var computed_style = window.getComputedStyle(this.$elm[0]);

            return computed_style[this.options.property];

        }

	}

    return Stint;

})($);