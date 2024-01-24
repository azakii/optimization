window.jQuery.fn.myFunction = function () {
    var langData = $('html').attr('lang');

    // عرض جميع الفعاليات في الرئيسية
    $.ajax({
        url: 'https://cpass.saudievents.sa/api/feature_event',
        type: 'GET',
        dataType: 'json',
        data: {
            lang: langData
        },
        success: function ({ data }) {
            // console.log(data);
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {

                    let dNone = ""
                    let readMoar = ""

                    if (data[i].event_time === null) {
                        dNone = "d-none"
                    }

                    if (langData === "ar") {
                        readMoar = "قراءة المزيد"
                        var sr = "ريال"
                        var pageName = "events-details.html?id="
                    } else {
                        readMoar = "Read More"
                        sr = "SR"
                        pageName = "events-details-en.html?id="
                    }

                    if (data[i].price_from) {
                        var priceFromNone = ""
                    } else {
                        priceFromNone = "d-none"
                    }

                    if (data[i].price_to) {
                        var priceToNone = ""
                    } else {
                        priceToNone = "d-none"
                    }


                    const times = data[i].times;
                    // const times = [
                    //     {
                    //         "time": "09:39 PM - 02:00 PM"
                    //     },
                    //     {
                    //         "time": "09:39 PM - 02:00 PM"
                    //     },
                    //     {
                    //         "time": "09:39 PM - 02:00 PM"
                    //     }
                    // ];

                    let eventTime;
                    let eventTimeBoxNone;
                    let eventTimeSelectBoxNone;

                    if (data[i].event_time === null) {

                        if (times.length === 0) {

                            eventTimeBoxNone = ""
                            eventTimeSelectBoxNone = "d-none"

                            if (langData === 'ar') {
                                eventTime = " لا توجد مواعيد متاحة في اليوم المختار "
                            } else {
                                eventTime = "No shows available on the selected date"
                            }

                        } else if (times.length === 1) {

                            eventTime = times[0].time
                            $('.eventTimeBox').attr('dir', 'ltr')
                            eventTimeBoxNone = ""
                            eventTimeSelectBoxNone = "d-none"

                        } else {

                            eventTime = times.map((item) =>
                                `<option dir="ltr" class="text-start">${item.time}</option>`
                            ).join('')
                            eventTimeBoxNone = "d-none"
                            eventTimeSelectBoxNone = ""

                        }

                    } else {
                        eventTime = data[i].event_time
                        eventTimeBoxNone = ""
                        eventTimeSelectBoxNone = "d-none"
                    }


                    $('#currentActivities').trigger('add.owl.carousel',
                        `
            <div class="item w-100">
                <div class="activities-list-item activities-list-item-data">
                    <div class="priceFromToNone `+ priceFromNone + `">` + data[i].price_from + ` ` + sr + ` <span class="` + priceToNone + `">- ` + data[i].price_to + ` ` + sr + `</span></div>
                    <div class="activities-img lazy" data-bg="`+ data[i].hero_image + `" style="background-image: url('./img/ajax-loader.gif')" ></div>
                        <div class="activities-info">
                            <h2 class="mb-3">` + data[i].title + `</h2>
                            <div class="activities-info-date d-flex justify-content-start align-items-center gap-3 mb-2"><img src="img/calendar-icon.svg" alt="" /><span>`+ data[i].event_date + `</span></div>
                            <div class="activities-info-time d-flex justify-content-start align-items-center gap-3 `+ dNone + `">
                                <img src="img/cloke-icon.svg" alt="" />
                                <span class="${eventTimeBoxNone} eventTimeBox">${eventTime}</span>
                                <select class="${eventTimeSelectBoxNone} eventTimeSelectBox w-100 border-0 text-dark fs-12">${eventTime}</select>
                            </div>
                            <hr>
                            <p>` + data[i].description + `</p>
                        </div>
                        <div class="row g-0">
                            <div class="col-6">
                                <div class="activities-read-moar">
                                    <a href="`+ pageName + data[i].id + `">` + readMoar + `</a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="activities-book-now">
                                    <a href="`+ data[i].ticket_mix_url + `" target="_blank">` + data[i].ticket_type + `</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            `,
                    );

                    $('.current-activities').trigger('refresh.owl.carousel');
                }
                $('.current-activities').trigger('refresh.owl.carousel');
                $('.activities-skeleton').addClass('d-none')
                // lazyload();
                var myLazyLoad = new LazyLoad();
                myLazyLoad.update();
            } else {
                $('#eventsHomeSection').addClass('d-none');
            }
        },
        error: function (data) {
            console.log(JSON.stringify(data));
        }
    });

    $.ajax({
        url: 'https://cpass.saudievents.sa/api/getevents',
        type: 'GET',
        dataType: 'json',
        data: {
            lang: langData
        },
        success: function ({ data }) {
            // console.log(data);
            for (var i = 0; i < data.length; i++) {

                let dNone = ""
                let readMoar = ""

                if (data[i].event_time === null) {
                    dNone = "d-none"
                }

                if (langData === "ar") {
                    readMoar = "قراءة المزيد"
                } else {
                    readMoar = "Read More"
                }

                $('#allActivities').append(`
                <div class="col-lg-3 col-md-4">
                    <div class="activities-list-item activities-list-item-data">
                        <div class="activities-img" style="background-image: url(` + data[i].hero_image + `);"></div>
                            <div class="activities-info">
                                <h2 class="mb-3">` + data[i].title + `</h2>
                                <div class="activities-info-date d-flex justify-content-start align-items-center gap-3 mb-2"><img src="img/calendar-icon.svg" alt="" /><span>`+ data[i].event_date + `</span></div>
                                <div class="activities-info-time d-flex justify-content-start align-items-center gap-3"><img src="img/cloke-icon.svg" alt="" /><span>`+ data[i].event_time + `</span></div>
                                <hr>
                                <p>` + data[i].description + `</p>
                            </div>
                            <div class="row g-0">
                                <div class="col-6">
                                    <div class="activities-read-moar">
                                        <a href="events-details.html?id=`+ data[i].id + `">` + readMoar + `</a>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="activities-book-now">
                                        <a href="`+ data[i].ticket_mix_url + `" target="_blank">` + data[i].ticket_type + `</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            `);
            }
            $('.activities-skeleton').addClass('d-none')
        },
        error: function (data) {
            console.log(JSON.stringify(data));
        }
    });

    $.ajax({
        url: 'https://cpass.saudievents.sa/api/seasons',
        type: 'GET',
        dataType: 'json',
        data: {
            lang: langData
        },
        success: function ({ data }) {
            // console.log(data);
            data = data.reverse();
            var seasonsLink;
            var seasonsLinkTarget;
            for (var i = 0; i < data.length; i++) {

                if (data[i].link != '#') {
                    seasonsLink = data[i].link;
                    seasonsLinkTarget = '_blank';
                }
                else {
                    seasonsLink = 'seasons-page.html?id=' + data[i].id;
                    seasonsLinkTarget = '_self';
                }

                $('#currentSeasons').trigger('add.owl.carousel', `
            <div class="item"><a><div class="activities-list-item" style="background-image: url(`+ data[i].image + `);"></div></a></div>
            `,);
                $('.current-activities').trigger('refresh.owl.carousel');
            }
            $('.current-activities').trigger('refresh.owl.carousel');
            $('.seasons-skeleton').addClass('d-none');
        },
        error: function (data) {
            console.log(JSON.stringify(data));
        }
    });
    // <div className="item"><a href="`+seasonsLink+`" target="`+seasonsLinkTarget+`">
    //     <div className="activities-list-item" style="background-image: url(`+ data[i].image +`);"></div>
    // </a></div>
    $.ajax({
        url: 'https://cpass.saudievents.sa/api/sliders',
        type: 'GET',
        dataType: 'json',
        data: {
            lang: langData
        },
        success: function (data) {
            // console.log(data);

            if (data.length === 0) {
                $('.social-media').addClass('social-media-no-slide')
            }

            for (var i = 0; i < data.length; i++) {

                if ($(window).width() <= 650) {
                    if (data[i].mobile_image === "") {
                        sliderImgUrl = data[i].image;
                    } else {
                        sliderImgUrl = data[i].mobile_image;
                    }
                } else {
                    sliderImgUrl = data[i].image;
                }

                $('.big-slider').trigger('add.owl.carousel', `
                <div class="item">
                    <a href="`+ data[i].link + `">
                        <div class="top-slider-item text-center text-white">
                            <img src="`+ sliderImgUrl + `" alt="" class="w-100" />
                            <div class="top-slider-item-content"><h1>`+ data[i].title + `<br><span class="fontFamilyMedium">` + data[i].description + `</span></h1></div>
                        </div>
                    </a>
                </div>
            `,);
                $('.big-slider').trigger('refresh.owl.carousel');
            }
            $('.big-slider').trigger('refresh.owl.carousel');
            $('.slider-skeleton').addClass('d-none');
        },
        error: function (data) {
            console.log(JSON.stringify(data));
        }
    });

};