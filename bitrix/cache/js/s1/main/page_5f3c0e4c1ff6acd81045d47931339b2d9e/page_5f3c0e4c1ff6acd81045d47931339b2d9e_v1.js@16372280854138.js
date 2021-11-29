
; /* Start:"a:4:{s:4:"full";s:73:"/local/components/7sky/slider/templates/.default/script.js?16357551373817";s:6:"source";s:58:"/local/components/7sky/slider/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function () {

    var $slider = $('.slider-component-section');
    var $swiper;

    /**
     * Init Swiper
     */
    (function () {

        // $slider
        //     .append('<div class="swiper-button-next"></div>')
        //     .append('<div class="swiper-button-prev"></div>');

        $slider.children('.elementor-container')
            .addClass('swiper-container')
            .append('<div class="swiper-pagination"></div>');

        $swiper = new Swiper('.custom-swiper > .elementor-container', {
            loop: true,
            parallax: true,
            speed: 500,
            autoplay: {
                delay: 10000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            pagination: {
              el: '.custom-swiper .swiper-pagination',
              type: 'bullets',
              clickable: true,
            },
        });
    })();

    /**
     * Refresh countdown
     */
    $(document).ready(function ($) {

        $slider.find('.elementor-countdown-wrapper').each(function () {
            var date = $(this).data('date');
            if (date) {
                initializeClock(this, new Date(date));
            }
        })
    });

    /**
     * initializeClock
     * @param el
     * @param endtime
     */
    function initializeClock(el, endtime) {

        var clock = el;
        var daysSpan = clock.querySelector(".elementor-countdown-days");
        var hoursSpan = clock.querySelector(".elementor-countdown-hours");
        var minutesSpan = clock.querySelector(".elementor-countdown-minutes");
        var daysLabel = daysSpan.nextElementSibling;
        var hoursLabel = hoursSpan.nextElementSibling;
        var minutesLabel = minutesSpan.nextElementSibling;

        function updateClock() {
            var t = getTimeRemaining(endtime);

            if (t.total <= 0) {
                clearInterval(timeinterval);
                var index = $(el.closest('.swiper-slide')).data('swiper-slide-index');
                $swiper.removeSlide(index);
                return;
            }

            t.hours = t.hours < 10 ? ("0" + t.hours).slice(-2) : t.hours;
            t.minutes = t.minutes < 10 ? ("0" + t.minutes).slice(-2) : t.minutes;

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = t.hours;
            minutesSpan.innerHTML = t.minutes;

            daysLabel.innerHTML = declOfNum(t.days, ['день', 'дня', 'дней']);
            hoursLabel.innerHTML = declOfNum(t.hours, ['час', 'часа', 'часов']);
            minutesLabel.innerHTML = declOfNum(t.minutes, ['минута', 'минуты', 'минут']);
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    /**
     * getTimeRemaining
     * @param endtime
     * @return {{}}
     */
    function getTimeRemaining(endtime) {

        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    /**
     * declOfNum
     * @param number
     * @param words
     * @return {*}
     */
    function declOfNum(number, words) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    }

});
/* End */
;; /* /local/components/7sky/slider/templates/.default/script.js?16357551373817*/
