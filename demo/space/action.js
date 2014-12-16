//space... what a concept

var Particle = (function($){

    var Particle =  function(container, num){

        // change to canvas

        var $container = $(container),
            $content = $container.find('.content').first(),
            $parent = $('<div class="container--particles">'),
            num = num || 0;


        for(var i = 0; i < num; i++){

            var $particle = $('<div class="particle"></div>');

            $particle.css({
              'opacity': Math.random(),
              '-webkit-transform': 'translate3d('+Math.random() * ($content.width()-5) + 'px,  '+ Math.random() * $content.height() +'px,  0px)',
              '-webkit-animation': 'fade 1.5s infinite '+Math.random() * i/2 +'s'+ ' ease-in-out both'
            });

            $parent.append($particle);
        }

        $content.append($parent);

    }

    Particle.prototype = {}

    return Particle;

})($);



$(function(){

    var particle_top = new Particle('.container--space', 100);


    var simple_1 = new Stint({
        element: '.orbit--1',
        property: 'rotate',
        prop_start: 0,
        prop_end: 1080,
        unit: 'deg',
        speed: .12
    });


    var simple_2 = new Stint({
        element: '.orbit--2',
        property: 'rotate',
        prop_start: 0,
        prop_end: 1080,
        unit: 'deg',
        speed: .09
    });

    var simple_3 = new Stint({
        element: '.orbit--3',
        property: 'rotate',
        prop_start: 0,
        prop_end: 1080,
        unit: 'deg',
        speed: .1
    });

    var simple_4 = new Stint({
        element: '.orbit--4',
        property: 'rotate',
        prop_start: 0,
        prop_end: 1080,
        unit: 'deg',
        speed: .15
    });


    var simple_5 = new Stint({
        element: '.orbit--5',
        property: 'rotate',
        prop_start: 0,
        prop_end: 1080,
        unit: 'deg',
        speed: .1
    });


    var simple_6 = new Stint({
        element: '.orbit--6',
        property: 'rotate',
        prop_start: 0,
        prop_end: 1080,
        unit: 'deg',
        speed: .1
    });


    var simple_7 = new Stint({
        element: '.orbit--7',
        property: 'rotate',
        prop_start: 0,
        prop_end: 1080,
        unit: 'deg',
        speed: .15
    });

    var simple_8 = new Stint({
        element: '.orbit--8',
        property: 'rotate',
        prop_start: 0,
        prop_end: 1080,
        unit: 'deg',
        speed: .05
    });


    var simple_10 = new Stint({
        element: '.solar_sytem',
        property: 'scale',
        prop_start: .5,
        prop_end: .95,
        speed: .1
    });

    var simple_11 = new Stint({
        element: '.solar_sytem > .content',
        property: 'opacity',
        prop_start: .5,
        prop_end: .85,
        speed: .25
    });


    var simple_12 = new Stint({
        element: '.sun',
        prop_start: 1,
        prop_end: 1,
        speed: .001,
        custom_class: 'fade',
        timeline_end: true
    });


    var simple_13 = new Stint({
        element: '.sun--happy',
        prop_start: 1,
        prop_end: 1,
        speed: .001,
        custom_class: 'fade',
        timeline_end: true
    });


});