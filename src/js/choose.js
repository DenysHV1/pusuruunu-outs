import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const chooseSwiper = () => {
  let chooseSwiper = null;

  const initChooseSwiper = () => {
    if (window.innerWidth < 1440) {
      if (!chooseSwiper) {
        chooseSwiper = new Swiper('.swiper-choose', {
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
            el: '.swiper-pagination-choose',
            clickable: true,
          },
        });
      }
    } else {
      if (chooseSwiper) {
        chooseSwiper.destroy(true, true);
        chooseSwiper = null;
      }
    }
  };

  initChooseSwiper();
  window.addEventListener('resize', initChooseSwiper);
};
