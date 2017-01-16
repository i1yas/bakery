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
	const arrows = {
		left: $('#slider-left-arrow'),
		right: $('#slider-right-arrow')
	};

	carouselElement.slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: config.slidesToScroll,
		arrows: false
	});

	carouselElement.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		for (const key in presentations) {
			if ({}.hasOwnProperty.call(presentations, key)) {
				presentations[key].slick('slickGoTo', nextSlide);
			}
		}
	});

	arrows.left.on('click', function (){
		carouselElement.slick('slickPrev');
	});
	arrows.right.on('click', function (){
		carouselElement.slick('slickNext');
	});

	presentations.text.slick({
		slidesToScroll: config.slidesToScroll,
		slidesToShow: 1,
		arrows: false,
		fade: true,
		swipe: false
	});

	presentations.picture.slick({
		slidesToScroll: config.slidesToScroll,
		slidesToShow: 1,
		arrows: false,
		fade: true,
		swipe: false
	});

	presentations.nums.slick({
		slidesToScroll: config.slidesToScroll,
		slidesToShow: 1,
		arrows: false,
		fade: true,
		swipe: false
	});

};

module.exports = foodWidget;
