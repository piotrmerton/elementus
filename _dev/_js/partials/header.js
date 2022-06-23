//Waypoints doesn't support ES6 modules as of 12-2018 and version 4.0.1
//https://github.com/imakewebthings/waypoints/issues/453#issuecomment-143401197
//https://github.com/imakewebthings/waypoints/issues/458#issuecomment-151735949
//https://medium.com/hard-work/waypoints-with-npm-e8651893813
require('waypoints/lib/noframework.waypoints.min');

export let header = {
	headerID : 'header-top',
	toggleClass : 'header--fixed',

	resizeOnScroll : function() {

		const self = this;
		const header = document.getElementById(this.headerID);

		//at first it may seem that additional plugin for simple class toggle on scroll is overkill,
		//waypoints takes care of debouncing/throttling scroll events thus making it more performant and bulletproof

		const waypoint = new Waypoint({

			element: document.body,
			handler: function(direction) {
				if (direction === 'down') {					
					header.classList.add(self.toggleClass);
				} else if (direction === 'up') {
					header.classList.remove(self.toggleClass);
				}				
			},
			offset: function() {
				return -100;
			}

		});		
		
	}	
}