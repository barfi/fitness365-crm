// -----------------------------------------------------------------------------
// HOME PAGE SCRIPTS
// -----------------------------------------------------------------------------

//Document is ready
$(document).ready(function () {

    //Gridstack
    var gsOptions = {
        width: 6,
        cellHeight: '30px',
        minWidth: 1280
    };

    var gridStack = $('.grid-stack').gridstack(gsOptions);


    // WIDGETS SCRIPTS

    // Tasks scroll widget
    var tabsScroll = $('.scrollable-tabs').niceScroll({
        emulatetouch: true,
        cursorcolor: "#adb5bd",
        grabcursorenabled: false, // hide grab cursor!
        background: "#e3e6e9",
        cursorwidth: "4px",
        cursorborder: "none",
        cursorborderradius: "2px",
        railoffset: {left: -3}
    });


    // Tabs scripts
    $('.tabs-links .item')
        .tab({
            onVisible: function () {
                tabsScroll.resize(); // Refresh scroll plugin
            }
        });

    gridStack.on('change', function (event, items) {
        tabsScroll.resize();
    });


});
