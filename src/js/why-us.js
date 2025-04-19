import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const whyUsSwiper = () => {
  let whyUsSwiper = null;

  const initWhyUsSwiper = () => {
    if (window.innerWidth < 1440) {
      if (!whyUsSwiper) {
        whyUsSwiper = new Swiper('.swiper-why-us', {
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
            el: '.swiper-pagination-why-us',
            clickable: true,
          },
        });
      }
    } else {
      if (whyUsSwiper) {
        whyUsSwiper.destroy(true, true);
        whyUsSwiper = null;
      }
    }
  };

  initWhyUsSwiper();
  window.addEventListener('resize', initWhyUsSwiper);
};
