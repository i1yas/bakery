import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import navbar from '../blocks/header/header';
import 'slick-carousel';
import foodWidget from '../blocks/food-widget/food-widget';

$(() => {
	svg4everybody();
	navbar($);
	foodWidget($);
});
