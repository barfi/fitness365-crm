// -----------------------------------------------------------------------------
// GLOBAL APP SCRIPTS
// -----------------------------------------------------------------------------

//Document is ready
$(document).ready(function () {

    // Svg4everybody init.
    svg4everybody();

    // Attention! Switch pushable target id's to class 'pushable'

    //sidebar toggle functions
    var sbToggler = $('#sb-toggler'),
        pushableElements = $('.pushable'); // all elements for push

    sbToggler.click(function () {
        pushableElements.toggleClass('pushed');
    });


    // Logout click callback

    var btnLogout = $('#btn-logout');
    btnLogout.click(function () {
        alert('You clicked the logout btn!')
    });

    // SIDEBAR SCRIPTS
    // ----------------------------------------------

    // Sidebar scroll
    var sbScroll = $('.sb-scroll').niceScroll({
        emulatetouch: false, // Switch to false IE conflicts!!!
        cursorcolor: "rgba(255,255,255,.1)",
        grabcursorenabled: false, // hide grab cursor!
        background: "rgba(255,255,255,.05)",
        cursorwidth: "4px",
        cursorborder: "none",
        cursorborderradius: "2px",
        railoffset: {left: -3}
    });

    // Accordion menu switch
    $('.sb-nav-link').on('click', function () {
        var nextElem = $(this).next();
        var thisLink = $(this);

        if (nextElem.hasClass('sb-nav-sub')) {

            if (nextElem.is(':visible')) {
                thisLink.removeClass('show-sub');
                nextElem.slideUp(function () {
                    sbScroll.resize();
                });
            } else {
                $('.sb-nav-link').each(function () {
                    $(this).removeClass('show-sub');
                });

                $('.sb-nav-sub').each(function () {
                    $(this).slideUp();
                });

                thisLink.addClass('show-sub');
                nextElem.slideDown(function () {
                    sbScroll.resize();
                });

            }
            return false;
        }
    });

    // -------------------------------------------------------------------------


});
