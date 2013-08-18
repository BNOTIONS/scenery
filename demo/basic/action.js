$(document).ready(function(){
	var movie = new Scenery({
		scenes: 20,
		scene_length: 'window'
	});

	var thread = new Thread({
		element: '#box-1',
		property: 'left',
		prop_start: '0',
		prop_end: '90',
		unit: '%',
		timeline_start: '0',
		timeline_end: '100'
	})
});