import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const howWorksSwiper = () => {
	let howWorksSwiper = null;

	const initHowWorksSwiper = () => {
		if (window.innerWidth < 1440) {
			if (!howWorksSwiper) {
				howWorksSwiper = new Swiper(".swiper-how-works", {
					slidesPerView: 1,
					slidesPerGroup: 1,
centeredSlides: false,
					loop: false,
					grabCursor: true,
					spaceBetween: 24,
					speed: 800,
					simulateTouch: true,
					touchRatio: 1,
					mousewheel: {
						sensitivity: 0.5,
					},
					keyboard: {
						enabled: true,
						onlyInViewport: true,
					},
					pagination: {
						el: ".swiper-pagination-how-works",
						clickable: true,
					},
				});
			}
		} else {
			if (howWorksSwiper) {
				howWorksSwiper.destroy(true, true);
				howWorksSwiper = null;
			}
		}
	};

	initHowWorksSwiper();
	window.addEventListener("resize", initHowWorksSwiper);
};