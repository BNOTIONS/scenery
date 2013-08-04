$(document).ready(function(){
	var movie = new GenerateMovie({
		scenes: 7, /*Number of Scenes || int */
		scene_length: 'window', /* Height of each scene || int or 'window' if you want the 'length of one of your secenes to be the size of your browser window'  */
		stage_ele: '#stage', /* element to use as your movie 'stage' */
		scene_mgr: '#stage' /* element that will track which 'scene' is current in order to apply CSS changes / animations */
	});
	
	var thread = new Thread({
		element: '#block_1', // DOM Element to animate
		property: 'top', // CSS Property to adjust
		prop_start: -50, // Starting Position of CSS property
		prop_end: 0, // End Position of CSS property
		unit: '%', // CSS Unit of measurement - use '' if the value does not require a unit
		timeline_start: 0, // Position on timeline to begin animation (%)
		timeline_end: 100 // Position on timeline to end animation (%)
	});
	var thread = new Thread({
		element: '#block_2',
		property: 'top', 
		prop_start: -50, 
		prop_end: 0, 
		unit: '%', 
		timeline_start: 0,
		timeline_end: 100
	});
	var thread = new Thread({
		element: '#block_3', 
		property: 'bottom', 
		prop_start: -50,
		prop_end: 0, 
		unit: '%', 
		timeline_start: 0, 
		timeline_end: 100 
	});
	var thread = new Thread({
		element: '#block_4', 
		property: 'bottom', 
		prop_start: -50, 
		prop_end: 0, 
		unit: '%', 
		timeline_start: 0,
		timeline_end: 100 
	});	
	var thread = new Thread({
		element: '#block_1', 
		property: 'left', 
		prop_start: -50,
		prop_end: 0, 
		unit: '%',
		timeline_start: 0, 
		timeline_end: 100
	});
	var thread = new Thread({
		element: '#block_2',
		property: 'right',
		prop_start: -50, 
		prop_end: 0,
		unit: '%',
		timeline_start: 0, 
		timeline_end: 100 
	});
	var thread = new Thread({
		element: '#block_3', 
		property: 'left', 
		prop_start: -50,
		prop_end: 0, 
		unit: '%', 
		timeline_start: 0,
		timeline_end: 100 
	});
	var thread = new Thread({
		element: '#block_4',
		property: 'right', 
		prop_start: -50, 
		prop_end: 0, 
		unit: '%',
		timeline_start: 0, 
		timeline_end: 100 
	});
	var thread = new Thread({
		element: '.block', 
		property: 'height', 
		prop_start: 50,
		prop_end: 75, 
		unit: '%',
		timeline_start: 0, 
		timeline_end: 100
	});
	var thread = new Thread({
		element: '.block',
		property: 'width',
		prop_start: 50, 
		prop_end: 75,
		unit: '%',
		timeline_start: 0, 
		timeline_end: 100 
	});
});