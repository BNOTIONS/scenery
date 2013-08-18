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

	var thread3 = new Thread({
		element: '#tsb p',
		property: 'top',
		prop_start: '0',
		prop_end: '200',
		unit: 'px',
		timeline_start: '10',
		timeline_end: '40'
	});

	var thread4 = new Thread({
		element: '#tsb',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '10',
		timeline_end: '20'
	});

	var thread5 = new Thread({
		element: '#rect-1',
		property: 'width',
		prop_start: '0',
		prop_end: '50',
		unit: '%',
		timeline_start: '10',
		timeline_end: '60'
	});

	var thread6 = new Thread({
		element: '#rect-2',
		property: 'height',
		prop_start: '0',
		prop_end: '50',
		unit: '%',
		timeline_start: '60',
		timeline_end: '80'
	});

	var thread7 = new Thread({
		element: '#main_content h2',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '80',
		timeline_end: '90'
	});
});