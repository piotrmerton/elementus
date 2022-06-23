export let nav = {
	self : this,
	headerClass : 'header-top',
	menuClass : 'nav--top',
	buttonClass : 'do-toggle-nav',
	openClass : 'open',

	/**
	 *	Binds navigation UI with menu element
	 *
	 * @param {string} menuClass
	 * @param {string} buttonClass
	 * @param {string} openClass
	 */
	bind : function(headerClass = this.headerClass, menuClass = this.menuClass, buttonClass = this.buttonClass, openClass = this.openClass) {

		// parent object {nav}
		let self = this;
		
		let buttonEl = document.querySelector('.'+buttonClass);

		if(buttonEl === null) return;

		//bind button 
		buttonEl.addEventListener('click', (event) => {

			self.toggleMenu();
			event.preventDefault();

		});


	},

	toggleMenu : function(headerClass = this.headerClass, menuClass = this.menuClass, buttonClass = this.buttonClass, openClass = this.openClass) {

		let menuEl = document.querySelector('.'+menuClass);
		let buttonEl = document.querySelector('.'+buttonClass);
		let headerEl = document.querySelector('.'+headerClass);

		headerEl.classList.toggle('header--open');
		menuEl.classList.toggle(openClass);
		buttonEl.classList.toggle(openClass);

	},	
}