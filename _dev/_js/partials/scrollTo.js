export let scrollTo = {
	selector : '.do-scroll-to',
	offset : 80, //height of a fixed header ( alternatively get it dynamically via el.offsetHeight )

	/**
	 * @param {string} selector of an element(s) to bind to
	 */
	bind : function(selector = this.selector, offset = this.offset) {

		let buttons = document.querySelectorAll(selector);

		for(let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function(event) {

				let target = buttons[i].dataset.scrollTarget;

				// we can't controll offset for scrollIntoView so use scrollTo instead

				// document.querySelector('.'+target).scrollIntoView({ 
				// 	block : 'start',
				//  behavior: 'smooth',
				// });

				window.scrollTo({
					top: document.querySelector('.'+target).offsetTop - offset,
					behavior: 'smooth',
				});				
				
				event.preventDefault();			

			});
		}

	}
}