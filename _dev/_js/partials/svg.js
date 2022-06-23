
//svgs need to be inlined in order to manipulate svg's paths fill and stroke attr via CSS

//https://github.com/jonnyhaynes/inline-svg
import inlineSVG from 'inline-svg';

export let svg = {
	selector : '.svg-inline',

	inline : function(selector = this.selector) {
		inlineSVG.init({
			svgSelector: selector, // the class attached to all images that should be inlined
		});			
	}
}