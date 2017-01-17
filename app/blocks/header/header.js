const navbar = $ => {
	const modifier = 'opened';
	const blockClass = 'header';

	const navigationElements = {
		navigation: $('.' + blockClass + '__navigation'),
		menu: $('.' + blockClass + '__menu'),
		icons: $('.' + blockClass + '__icons')
	};

	const mobileNav = $('.' + blockClass + '__mobile-nav');

	mobileNav.on('click', function (){
		for (const element in navigationElements) {
			if ({}.hasOwnProperty.call(navigationElements, element)) {
				navigationElements[element].toggleClass(blockClass + '__' + element + '_' + modifier);
			}
		}
		$('.' + blockClass).toggleClass(blockClass + '_' + modifier);
	});
};

module.exports = navbar;
