import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const memberSwiper = () => {
  let memberSwiper = null;

  const initMemberSwiper = () => {
    if (window.innerWidth < 1440) {
      if (!memberSwiper) {
        memberSwiper = new Swiper('.swiper-member', {
          slidesPerView: 1,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          grabCursor: true,
          spaceBetween: 10,
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
            el: '.swiper-pagination-member',
            clickable: true,
          },
        });
      }
    } else {
      if (memberSwiper) {
        memberSwiper.destroy(true, true);
        memberSwiper = null;
      }
    }
  };

  initMemberSwiper();
  window.addEventListener('resize', initMemberSwiper);
};
