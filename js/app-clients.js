// -----------------------------------------------------------------------------
// CLIENTS PAGE SCRIPTS
// -----------------------------------------------------------------------------

//Document is ready
$(document).ready(function () {
    tableHeaderHeightCalc();

    $(window).resize(function () {
        tableHeaderHeightCalc();
    });


    // Dropdowns init (semantic dropdowns)
    $('.dropdown-simple').dropdown({
        maxSelections: true
    });

    // Filters
    $('.filter-select').dropdown({});


    // Table sort
    // https://github.com/kylefox/jquery-tablesort
    $('.tp-table').tablesort();

    // Calculate table body padding from table header height
    $("#btn-filter-toggle").click(function () {
        $(".tp-header-filters").slideToggle(300, function () {
            tableHeaderHeightCalc();
        });
    });

    // -------------------------------------------------------------------------
    // Slide modal window scripts
    // -------------------------------------------------------------------------
    $('.dimmable').dimmer({
        closable: false
    });
    // SMW OPEN WINDOW
    $('.smw-open').click(function () {
        var smwEl = $(".modal-client-details");
        $('.dimmable').dimmer('show');
        smwEl.animate({
            right: "0"
        }, 300, function () {
            smwEl.addClass('open');
            smwEl.removeAttr('style');
        });
    });

    // SMW CLOSE WINDOW
    $('.smw-close').click(function () {
        var smwEl = $(".modal-client-details");
        var smwElWidth = smwEl.outerWidth();
        $('.dimmable').dimmer('hide');
        smwEl.animate({
            right: -smwElWidth + 'px'
        }, 300, function () {
            smwEl.removeAttr('style');
            smwEl.removeClass('open');
        });
    });


    // Dropdowns init (semantic dropdowns)
    $('.smw-dropdown').dropdown({
        maxSelections: true
    });

    // SMW input dropdowns
    $('.smw-input-dropdown').dropdown({});

    // SMW filters
    // Filters
    $('.smw-filter-select').dropdown({});

    // SMW calendar init
    $('.smw-calendar').calendar({
        type: 'date',
        firstDayOfWeek: 1,
        today: true,
        text: {
            days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Нояб', 'Дек'],
            today: 'Сегодня',
            now: 'Сейчас',
            am: 'У',
            pm: 'В'
        },
        monthFirst: false

    });

    // Horizontal scrolling for smw
    var smwHrScroll = $('.smw-hr-scroll').niceScroll({
        cursorcolor: "#adb5bd",
        grabcursorenabled: false, // hide grab cursor!
        background: "#e3e6e9",
        cursorwidth: "4px",
        cursorborder: "none",
        cursorborderradius: "2px"
    });

    // Tabs scroll bars

    var smwTabsScroll = $('.smw-scrollable-tabs').niceScroll({
        emulatetouch: false, // Switch to false IE conflicts!!!
        cursorcolor: "#adb5bd",
        grabcursorenabled: false, // hide grab cursor!
        background: "#e3e6e9",
        cursorwidth: "4px",
        cursorborder: "none",
        cursorborderradius: "2px"
    });


    // Tabs scripts
    $('.smw-tabs-links .item')
        .tab({
            onVisible: function () {
                smwTabsScroll.resize(); // Refresh scroll plugin
            }
        });

    // Client profile form section toggle
    $('.mcd-fs-toggle').click(function () {
        $(this).toggleClass('toggled');
        $(this).parent().parent().find('.form-body').slideToggle(function () {
            smwTabsScroll.resize();
        });
    });


    // SMW filters toggle
    // Change this optional

    $('.smw-filter-toggle').click(function () {
        var curFilter = $(this).closest('.smw-point-inner').find('.smw-tables-filters');
        $(this).toggleClass('active');
        curFilter.slideToggle();
    });

    // SMW Table sort
    // https://github.com/kylefox/jquery-tablesort
    $('.smw-table').tablesort();


});

// Recalculation of table header height
function tableHeaderHeightCalc() {
    var tableHeader = $('.tabled-page .tp-header');
    var tableHeaderHeight = tableHeader.outerHeight() - parseInt(tableHeader.css('padding-top'));
    $('.tabled-page-pt').css('padding-top', tableHeaderHeight + 'px')
}