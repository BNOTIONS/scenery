$(document).ready(function(){
	var movie = new Scenery({
		scenes: 20,
		scene_length: 'window'
	});

	var thread = new Thread({
		element: '#screen-1',
		property: 'top',
		prop_start: '-100',
		prop_end: '0',
		unit: '%',
		timeline_start: '0',
		timeline_end: '10'
	});

	var thread2 = new Thread({
		element: '#screen-2',
		property: 'top',
		prop_start: '100',
		prop_end: '0',
		unit: '%',
		timeline_start: '30',
		timeline_end: '50'
	});
	
	var thread3 = new Thread({
		element: '#screen-3',
		property: 'left',
		prop_start: '100',
		prop_end: '0',
		unit: '%',
		timeline_start: '80',
		timeline_end: '95'
	});
});