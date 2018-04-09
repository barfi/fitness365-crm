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
    $('.table').tablesort();

    // Calculate table body padding from table header height
    $("#btn-filter-toggle").click(function () {
        $(".tp-header-filters").slideToggle(300, function () {
            tableHeaderHeightCalc();
        });
    });
});

// Recalculation of table header height
function tableHeaderHeightCalc() {
    var tableHeader = $('.tabled-page .tp-header');
    var tableHeaderHeight = tableHeader.outerHeight() - parseInt(tableHeader.css('padding-top'));
    $('.tabled-page-pt').css('padding-top', tableHeaderHeight + 'px')
}