@@include('jquery-3.5.1.min.js')
@@include('slick.min.js')

//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// Onclick menu

let user_iccon = document.querySelector('.user-header__iccon');
user_iccon.addEventListener("click", function (e) {
    let user_menu = document.querySelector('.user-header-menu');
    user_menu.classList.toggle('active');
});

// Close menu
document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.user-header')) {
        let user_menu = document.querySelector('.user-header-menu');
        user_menu.classList.remove('active');
    }
});

// Burger
$(function () {
    $(".nav-toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("_active");
        $(".header-menu").toggleClass("_active");
    });

});

// Ibg

function ibg() {

    document.querySelectorAll(".ibg").forEach(el => {
        if (el.querySelector('img')) {
            el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
        }
    });
}

ibg();

// Slick

$(".intro__slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: 'ease',
    speed: 1000,
    infinite: true,
    autoplaySpeed: 1500,
    draggable: false,
    waitForAnimate: false,
    adaptiveHeight: true
});

$("#lots__slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.control-lots__arrow_left'),
    nextArrow: $('.control-lots__arrow_right'),
    easing: 'ease',
    speed: 1000,
    infinite: true,
    autoplaySpeed: 1500,
    draggable: false,
    waitForAnimate: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

$("#quotes__slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: 'ease',
    prevArrow: $('.row-quotes__arrow_left'),
    nextArrow: $('.row-quotes__arrow_right'),
    speed: 1000,
    infinite: true,
    autoplaySpeed: 1500,
    draggable: false,
    waitForAnimate: false,
    adaptiveHeight: true
});

$(function () {
    var slider = $('#quotes__slide');

    $('quotes__row .slick-prev').on('click', function () {
        $(slider).slick('slickPrev');
    });
    $('.quotes__row .slick-next').on('click', function () {
        $(slider).slick('slickNext');
    });
});


$(function () {
    var slider = $('#lots__slider');

    $('lots__control .slick-prev').on('click', function () {
        $(slider).slick('slickPrev');
    });
    $('.lots__control .slick-next').on('click', function () {
        $(slider).slick('slickNext');
    });
});
