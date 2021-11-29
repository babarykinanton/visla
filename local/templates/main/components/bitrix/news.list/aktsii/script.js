$(function () {

    $(document).on('click', '.elementor-4717 .elementor-toggle-title', function (e) {
        e.preventDefault();
        $(e.target).parent().next().slideToggle("slow");
    });
});