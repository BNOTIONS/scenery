$(document).ready(function(){
	var movie = new Scenery({
		scenes: 100,
		scene_length: 'window'
	});

	var thread = new Thread({
		element: '#box-1',
		property: 'margin-left',
		prop_start: '-20',
		prop_end: '0',
		unit: 'vw',
		timeline_start: '0',
		timeline_end: '25'
	});

	var thread2 = new Thread({
		element: '#box-1',
		property: 'left',
		prop_start: '20',
		prop_end: '90',
		unit: 'vw',
		timeline_start: '42',
		timeline_end: '60'
	});

	var thread3 = new Thread({
		element: '#box-2',
		property: 'left',
		prop_start: '0',
		prop_end: '90',
		unit: 'vw',
		timeline_start: '20',
		timeline_end: '70'
	});

	var thread4 = new Thread({
		element: '#box-3',
		property: 'left',
		prop_start: '0',
		prop_end: '90',
		unit: 'vw',
		timeline_start: '20',
		timeline_end: '65'
	});

	var thread5 = new Thread({
		element: '#box-4',
		property: 'left',
		prop_start: '0',
		prop_end: '90',
		unit: 'vw',
		timeline_start: '20',
		timeline_end: '80'
	});

	var thread6 = new Thread({
		element: '.secondary, #sky',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '35',
		timeline_end: '45'
	});

	var thread7 = new Thread({
		element: '#road',
		property: 'margin-right',
		prop_start: '-10',
		prop_end: '0',
		unit: 'vw',
		timeline_start: '0',
		timeline_end: '25'
	});

	var thread8 = new Thread({
		element: '#road',
		property: 'right',
		prop_start: '-80',
		prop_end: '0',
		unit: 'vw',
		timeline_start: '42',
		timeline_end: '60'
	});


	var thread9 = new Thread({
		element: '#in',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '2',
		timeline_end: '5'
	});
	
	var thread10 = new Thread({
		element: '#title',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '7',
		timeline_end: '10'
	});

	var thread11 = new Thread({
		element: '#header_cover',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '12',
		timeline_end: '15'
	});

	var thread12 = new Thread({
		element: '#pt_1',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '15',
		timeline_end: '18'
	});

	var thread13 = new Thread({
		element: '#pt_2',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '18',
		timeline_end: '21'
	});


	var thread14 = new Thread({
		element: '#pt_3',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '21',
		timeline_end: '24'
	});

	var thread15 = new Thread({
		element: '#pt_4',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '24',
		timeline_end: '27'
	});

	var thread16 = new Thread({
		element: '#section_1_cover',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '32',
		timeline_end: '35'
	});

	var thread17 = new Thread({
		element: '#pt_5',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '35',
		timeline_end: '38'
	});

	var thread18 = new Thread({
		element: '#pt_6',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '45',
		timeline_end: '48'
	});

	var thread19 = new Thread({
		element: '#pt_7',
		property: 'opacity',
		prop_start: '0',
		prop_end: '1',
		unit: '',
		timeline_start: '55',
		timeline_end: '60'
	});


	var thread20 = new Thread({
		element: '#pt_4',
		property: 'bottom',
		prop_start: '12',
		prop_end: '-100',
		unit: 'vh',
		timeline_start: '35',
		timeline_end: '38'
	});

	var thread21 = new Thread({
		element: '.cloud',
		property: 'left',
		prop_start: '0',
		prop_end: '-10',
		unit: 'vw',
		timeline_start: '35',
		timeline_end: '100'
	});
	
	var thread22 = new Thread({
		element: '.mid_cloud',
		property: 'left',
		prop_start: '0',
		prop_end: '-20',
		unit: 'vw',
		timeline_start: '35',
		timeline_end: '100'
	});
	
	var thread23 = new Thread({
		element: '.big_cloud',
		property: 'left',
		prop_start: '0',
		prop_end: '-30',
		unit: 'vw',
		timeline_start: '35',
		timeline_end: '100'
	});
	var thread24 = new Thread({
		element: '#scroll_prompt',
		property: 'opacity',
		prop_start: '1',
		prop_end: '0',
		unit: '',
		timeline_start: '5',
		timeline_end: '10'
	});

	var thread25 = new Thread({
		element: '#flagpole',
		property: 'right',
		prop_start: '-5',
		prop_end: '8',
		unit: 'vw',
		timeline_start: '55',
		timeline_end: '60'
	});

});