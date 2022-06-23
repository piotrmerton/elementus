
/*
 *	simple object with UI related logic 
 */

import { header } from './partials/header';
import { nav } from './partials/nav';
import { svg } from './partials/svg';
import { scrollTo } from './partials/scrollTo';

export let UI = {

	mobile : /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
	windowWidth : window.innerWidth,
	windowHeight : window.innerHeight,
	debug : false,

	//calculate and store viewport dimensions
	//this method will be bound to window resize event so try not to overload it
	init : function() {

		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;

		if(this.debug)
		console.log( 'Window width: '+this.windowWidth+ ', Window height: '+this.windowHeight );
	},			

	header, 
	nav,
	svg,
	scrollTo,
}