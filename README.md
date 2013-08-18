# scenery.js

## 140 character summary

scenery.js is a Javascript tool that helps make it simpler to do interesting things on a web page as it scrolls

_kinda like these sites_
* http://line25.com/articles/15-awesome-websites-that-tell-a-story-as-you-scroll
* http://moto.oakley.com/
* http://2011.beercamp.com/
* http://www.nintendo.com.au/gamesites/mariokartwii/

## Re-visiting our web

The scenery.js Javascript tool was developed while investigating our uses of the web and web browsers, and trying to determine successful techniques around what makes websites 'cool', 'memorable', 'hot', or any other positive adjectives.

We have come a long way from the early days of the web, which was assembled as a tool to help transmit documents electronically from point A to point B.

We have moved well into an era of 'web applications', a period which has seen an expansion of the utility of web browsers from a tool for document retrieval, to becoming a tool that you can operate your life from (checking email, scheduling meetings, going shopping, preparing invoices, doing your accounting, booking horse rentals).

Along the way, some clever individuals have also managed to create some cool experiences within the web browser. They have created websites that are a joy to browse. They have created web applications that are fun to interact with. They have created web experiences that we tell others about. Dazzling, clever, unique, surprising experiences.

In assessing these scenarios, however, it quickly comes to light that a great deal of work went into making this happen.

"Make it do that thing" can generally translate into weeks of effort.

To that degree, **scenery.js** has emerged with the hopes of being a helpful tool to allow designers to be free to tackle some interesting experiences related to the scrollbar, and equip developers with some familiarity with HTML, CSS, and Javascript with a reliable tool to make these implementations easier.

## About the Library (What it do?!)

The scenery.js has two main options for implementing a 'film strip'-esque metaphor to your web browser experience.

The operative component in this scenario is the scrollbar.

In both scenarios, the scroll grip acts as a 'playhead' and the scroll track acts as the 'timeline'.

In case you are unclear regarding Scrollbar slang, check out the Wikipedia article to get the parts straight: http://en.wikipedia.org/wiki/Scrollbar.

### Option 1: Adding 'Scenes' to your Web Page

The first option allows you to control the size of your document (and the relative height of the scroll grip), and determine a number of 'scenes' that will be included in your web page.

To indicate a 'scene' in the DOM, a class is appended to the body tag (OR the tag of your choice), which you can then use as a trigger for changes of state in your CSS, or to run some CSS animations.

### Option 2: Mapping Scroll Grip Position to DOM Elements

The second option allows you to get the scroll position (represented as a percentage of completion), and map that number on to the CSS properties of various DOM elements.

At this time, the library supports mapping to the following CSS properties:

* height
* width
* top
* left
* right
* bottom
* opacity
* font-size
* border-radius
* padding
* margin

## Dependencies

Currently, this library depends on:
* jQuery 1.9.x (http://code.jquery.com/)
* Underscore.js (http://underscorejs.org/)

## Usage

At minimum, this library requires a DOM element that will act as the 'Stage' for your movie.

A few of the initial prototypes have led the developers to recognize that this may not be necessary over time, but it is in the current iteration of this library.

### Scenery() function

To instantiate your 'Movie', call the Scenery() function, setting any of the following optional parameters (with the defaults indicated in this example):

```javascript
var scenery = new Scenery();
```

#### Scenery() Config Options
The Scenery() function supports the following configurations:
* **scenes**: integer (default: 7) - Number of Scenes in movie
* **scene_length**: integer or 'window' (default: 'window') - Height of each scene expressed as on integer or 'window' if you want the 'length' of one of your secenes to be the size of your browser window
* **stage_ele**: jQuery DOM element selector (default: '#stage') - element to use as your movie 'stage'
* **scene_mgr**: jQuery DOM element selector (default: 'body') - element that will track which 'scene' is current in order to apply CSS changes / animations
* **main_ele**: jQuery DOM element selector (default: '#main_content') - element that contains the 'main content' of your web page if you need some of your site to act like a normal web page

##### Example
```javascript
var movie = new Scenery({
	scenes: 7,
	scene_length: 'window',
	stage_ele: '#stage',
	scene_mgr: 'body'
	main_ele: '#main_content'
});
```

### Thread() function
To create a new instance of an element that is mapped to the scroll grip, call the Thread() function as indicated:

```javascript
var thread = new Thread();
```

#### Thread() Config Options

* **element**: jQuery DOM element selector (default: 'body') - DOM Element to animate
* **property**: CSS property (default: 'opacity') - CSS Property to adjust (options listed above)
* **prop_start**: integer (default: 0) - Value of CSS property at start of animation
* **prop_end**: integer (default:  1) - 0 - Value of CSS property at end of animation
* **unit**: unit indicator (default: '') - CSS Unit of measurement (px, em, %, or '' if there is no Unit)
* **timeline_start**: integer - 0 - 100 (default: 0) - Position on timeline to begin animation (%)
* **timeline_end**: integer - 0 - 100  (default: 10) - Position on timeline to end animation (%)

##### Example
``` Javascript
var thread = new Thread({
	element: '#block_1', // DOM Element to animate
	property: 'top', // CSS Property to adjust
	prop_start: -50, // Starting Value of CSS property
	prop_end: 0, // End Value of CSS property
	unit: '%', // CSS Unit of measurement - use '' if the value does not require a unit
	timeline_start: 0, // Position on timeline to begin animation (%)
	timeline_end: 100 // Position on timeline to end animation (%)
});
```

## Browser Support
scenery.js has been tested and is performant in the following browsers:
* latest version of Chrome
* latest version of Firefox
* latest version of Internet Explorer

Over time, it is expected that hooks to make concessions for mobile and antique browsers will be made

## Next steps

Things we are looking to cover next:
* more examples and integration of feedback from people who are trying it out (the objective is to make this tool as beginner-friendly as possible)
* mobile considerations (sometimes you can implement this to good effect on mobile, but sometimes you will not want to try mapping things to the scrollbar on mobile devices)
* more optimizations to help ensure that frame rate considerations are taken into account when using the library (some requestAnimationFrame action)
* expansion of supported CSS properties (such as rotation, translate, and other instances of cool new CSS properties)

