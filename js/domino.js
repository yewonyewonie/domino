//더보기
const gnbMoreBtn = document.querySelector('.more');
const lnbBtn = document.querySelector('.moreClick');

gnbMoreBtn.addEventListener('click', function(){
    lnbBtn.classList.toggle('active_gnb')
})
//더보기

//메인 스와이프
var swiper = new Swiper(".mySwiper", {
    rewind: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

});

let pause = document.querySelector('.pause');
pause.addEventListener('click',
    ()=>swiper.autoplay.stop()
)

//메인 스와이프




