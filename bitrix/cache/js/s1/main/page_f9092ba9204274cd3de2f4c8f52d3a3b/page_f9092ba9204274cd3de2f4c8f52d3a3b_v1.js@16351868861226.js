
; /* Start:"a:4:{s:4:"full";s:77:"/local/templates/main/components/bitrix/news.list/faq/script.js?1632825452892";s:6:"source";s:63:"/local/templates/main/components/bitrix/news.list/faq/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function () {

    var $faq =  $('#faq-list');

    $faq.find('.elementor-active').show();

    $(document).on('click', '#faq-list .elementor-tab-title', function (e) {

        e.preventDefault();

        var $this = $(this);
        var $this_tab = $this.closest('.elementor-accordion-item').find('.elementor-tab-content');
        var $tabs = $faq.find('.elementor-tab-content.elementor-active').not($this_tab);

        $tabs.removeClass('elementor-active').slideUp();
        $tabs.prev().removeClass('elementor-active');

        if ($this_tab.is('.elementor-active')) {
            $this_tab.removeClass('elementor-active').slideUp();
            $this_tab.prev().removeClass('elementor-active');
        } else {
            $this_tab.addClass('elementor-active').slideDown();
            $this_tab.prev().addClass('elementor-active');
        }
    })
});
/* End */
;; /* /local/templates/main/components/bitrix/news.list/faq/script.js?1632825452892*/
