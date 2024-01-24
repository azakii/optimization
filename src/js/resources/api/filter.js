
window.jQuery.fn.myFunction = function () {
    var pageName = "";
    var langData = $('html').attr('lang');
    if (langData === 'ar') {
        pageName = 'events.html'
    } else {
        pageName = 'events-en.html'
    }

    $('#interests').on('select2:select', function (e) {
        var data = e.params.data;
        console.log(data.id);
        window.location.replace(pageName + '?interests=' + data.id + '&seasons&zones&date&search');
    });
    $('#seasons').on('select2:select', function (e) {
        var data = e.params.data;
        console.log(data.id);
        window.location.replace(pageName + '?interests&seasons=' + data.id + '&zones&date&search');
    });
    $('#zones').on('select2:select', function (e) {
        var data = e.params.data;
        console.log(data.id);
        window.location.replace(pageName + '?interests&seasons&zones=' + data.id + '&date&search');
    });

    $('#search').keypress(function (e) {
        if (e.which == 13) {
            if ($(this).val() === "") {
                $('#searchNone').removeClass('d-none')
            } else {
                $('#searchNone').addClass('d-none')
                window.location.replace(pageName + '?interests&seasons&zones&date&search=' + $(this).val() + '');
            }
        }
    });

    $("#dayTody").click(function () {
        window.location.replace(pageName + '?interests&seasons&zones&date=' + dayTodayFilter + '&search');
    });
    $("#dayTomorrow").click(function () {
        window.location.replace(pageName + '?interests&seasons&zones&date=' + dayTomorrowFilter + '&search');
    });
    $("#allDay").click(function () {
        window.location.replace(pageName);
    });
};