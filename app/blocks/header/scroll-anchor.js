const scrollToAnchor = $ => {
	$('a[href*="#"]').on('click', function (event){
		event.preventDefault();
		const offset = $(this.hash).offset();
		if (offset) {
			$('html,body').animate({scrollTop: offset.top}, 500);
		}
	});
};

module.exports = scrollToAnchor;
