const foodWidget = $ => {

	const config = {
		slidesToScroll: 1
	};

	const carouselElement = $('#slider-items');
	const presentations = {
		text: $('#text-items'),
		picture: $('#picture-items'),
		nums: $('#num-items')
	};

	carouselElement.slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: config.slidesToScroll,
		arrows: false
	});

	carouselElement.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		const diff = currentSlide - nextSlide;
		for (const key in presentations) {
			if ({}.hasOwnProperty.call(presentations, key)) {
				if (diff > 0) {
					presentations[key].slick('slickPrev');
				}else if (diff < 0) {
					presentations[key].slick('slickNext');
				}
			}
		}
	});

	presentations.text.slick({
		slidesToShow: config.slidesToScroll,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		swipe: false
	});

	presentations.picture.slick({
		slidesToShow: config.slidesToScroll,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		swipe: false
	});

	presentations.nums.slick({
		slidesToShow: config.slidesToScroll,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		swipe: false
	});
};

module.exports = foodWidget;
