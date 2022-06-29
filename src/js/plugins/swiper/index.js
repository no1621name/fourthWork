import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';
import SliderBar from 'before-after-slider';

//global data
import aboutOperation from '../alpine/globalData/aboutOperation.js';
import clinic from '../alpine/globalData/clinic.js';

export default () => {
  //before-after swiper
  new Swiper('.before-after-swiper', {
    direction: 'horizontal',
    allowTouchMove: false,
    modules: [Navigation, Pagination],
    pagination: {
      el: '#beforeAfterSwiperPagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#beforeAfterSwiperButtonPrev',
      nextEl: '#beforeAfterSwiperButtonNext'
    },
    breakpoints: {
      320 : {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
      1920: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
    }
  });

  //before-after sliders render
  document.querySelectorAll('.before-after-slider').forEach((el) => {
    new SliderBar({
      el: `#${el.id}`,
      beforeImg: el.dataset.beforeimg,
      afterImg: el.dataset.afterimg,
      height: '478.33px',
      width: '820px',
      line: true,
      lineColor: '#fff',
    });
    //crutches, sorry
    const before = document.createElement('span');
    const after = document.createElement('span');
    before.classList.add('before-remark');
    after.classList.add('after-remark');
    before.innerHTML = '<b>До</b> операции';
    after.innerHTML = '<b>После</b> операции';
    el.querySelector('.before-img').append(before);
    el.querySelector('.slider-wrap').append(after);
    const sliderArrows = document.createElement('span');
    sliderArrows.classList.add('slider-arrows');
    sliderArrows.innerHTML = `
      <svg transform="scale(-1, -1)" width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.56732 19.396L10.3836 10.5796L1.56732 1.76331" stroke="#597FAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.56732 19.396L10.3836 10.5796L1.56732 1.76331" stroke="#597FAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    el.querySelector('.slider-btn').append(sliderArrows);
  });

  //about operation swiper
  new Swiper('.about-operation-swiper', {
    direction: 'horizontal',
    allowTouchMove: false,
    loop: false,
    speed: 500,
    modules: [Pagination],
    pagination: {
      el: '.about-operation-swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => `<span class="${className}">${aboutOperation().pagination[index]}</span>`,
    },
  });

  //cases swiper
  new Swiper('.cases-swiper', {
    direction: 'horizontal',
    allowTouchMove: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: '#casesSwiperPagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#casesSwiperButtonPre',
      nextEl: '#casesSwiperButtonNext'
    },
    breakpoints: {
      320 : {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1440:{
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1920: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    }
  });

  //certificates swiper
  new Swiper('.certificates-swiper', {
    direction: 'horizontal',
    allowTouchMove: true,
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    slidesPerGroup: 3,
    pagination: {
      el: '#certificatesSwiperPagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#certificatesSwiperButtonPre',
      nextEl: '#certificatesSwiperButtonNext'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      }
    }
  });

  //clinic swiper
  new Swiper('.clinic-swiper', {
    direction: 'horizontal',
    allowTouchMove: false,
    loop: false,
    speed: 1000,
    effect: 'fade',
    modules: [Pagination, EffectFade],
    pagination: {
      el: '#clinicSwiperPagination',
      clickable: true,
      renderBullet: (ind, className) =>  `<span class="${className}"><img src="${clinic().pagination[ind]}" alt="clinic swiper pagination ${ind+1}"></img></span>`,
    },
  });
};