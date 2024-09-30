
    var swiper = new Swiper(".header-bg.swiper.mySwiper", {
        direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    clickable: true,

            },
    autoplay: {
        delay: 1500,
    disableOnInteraction: false,
            },
        });
    var swiper = new Swiper(".content1.swiper.mySwiper", {
        slidesPerView: 5,
    loop: true,
    keyboard: {
        enabled: true,
            },
    pagination: {
        el: ".slide-product.swiper-pagination",
    clickable: true,
            },
    navigation: {
        nextEl: ".slide-product.swiper-button-next",
    prevEl: ".slide-product.swiper-button-prev",
            },
    breakpoints: {
        300: {
        slidesPerView: 1,
                },
    700: {
        slidesPerView: 2,
                },
    950: {
        slidesPerView: 3,
    spaceBetween: 25,
                },
    1200: {
        slidesPerView: 4,
                },
    1300: {
        slidesPerView: 5,
                },
            },
    autoplay: {
        delay: 1500,
    disableOnInteraction: false,
            },
        });
    var swiper = new Swiper(".content2.swiper.mySwiper", {
        slidesPerView: 4,
    loop: true,
    spaceBetween: 15,
    keyboard: {
        enabled: true,
            },
    pagination: {
        el: ".slide-novelles.swiper-pagination",
    clickable: true,
            },
    navigation: {
        nextEl: ".slide-novelles.swiper-button-next",
    prevEl: ".slide-novelles.swiper-button-prev",
            },
    autoplay: {
        delay: 1500,
    disableOnInteraction: false,
            },
    breakpoints: {
        300: {
        slidesPerView: 1,
                },
    700: {
        slidesPerView: 2,
                },
    950: {
        slidesPerView: 3,
                },
    1200: {
        slidesPerView: 4,
                },
            },
        });
    var swiper = new Swiper(".content4.swiper.mySwiper", {
        slidesPerView: 6,
    loop: true,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: {
        el: ".slide-images.swiper-pagination",
            },
    autoplay: {
        delay: 1500,
    disableOnInteraction: false,
            },
    breakpoints: {
        300: {
        slidesPerView: 2,
                },
    700: {
        slidesPerView: 3,
                },
    850: {
        slidesPerView: 4,
                },
    1050: {
        slidesPerView: 5,
                },
    1250: {
        slidesPerView: 6,
                },
            },
        });