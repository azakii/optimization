window.jQuery.fn.myFunction = function () {

    $(window).on('load', function () {
        $(".loader").fadeOut("slow");
    });

    var langData = $('html').attr('lang');

    var windowWidth = $(window).width();
    var maxDeviceWidth = 575;
    if (windowWidth > maxDeviceWidth) {
        $('#coverVideoMob').remove()
        $('#coverVideoPc').removeClass('d-none')
        $('.slider-skeleton').addClass('d-none')
    } else {
        $('#coverVideoPc').remove()
        $('#coverVideoMob').removeClass('d-none')
        $('.slider-skeleton').addClass('d-none')
    }

    $('.big-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        //   navText: ["<img src='img/icon3.svg'>","<img src='img/icon4.svg'>"],
        autoplay: true,
        rtl: langData == 'ar' ? true : false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.current-activities').owlCarousel({
        loop: true,
        margin: 60,
        nav: true,
        center: true,
        navText: ["<img src='img/polygon-icon-1.svg'>", "<img src='img/polygon-icon-2.svg'>"],
        autoplay: true,
        rtl: langData == 'ar' ? true : false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 10,
            },
            1001: {
                items: 2,
                margin: 30,
            },
            1200: {
                items: 3
            }
        }
    })

    $('.partners-seasons').owlCarousel({
        loop: true,
        margin: 60,
        nav: true,
        center: true,
        dots: false,
        navText: ["<img src='img/polygon-icon-1.svg'>", "<img src='img/polygon-icon-2.svg'>"],
        autoplay: true,
        rtl: langData == 'ar' ? true : false,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: true,
                center: false,
                margin: 20,
            },
            1001: {
                items: 2,
                margin: 30,
            },
            1200: {
                items: 3
            }
        }
    })

    $('.current-skeleton').owlCarousel({
        loop: true,
        margin: 60,
        nav: false,
        center: true,
        autoplay: false,
        rtl: langData == 'ar' ? true : false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
            },
            1001: {
                items: 2,
                margin: 30,
            },
            1200: {
                items: 3
            }
        }
    })

    $("#showFilterOnMobile").click(function () {
        $('.filter-in-mobile').toggleClass('hide-filter-in-mobile')
    });

    $(".close-menu").click(function () {
        $('body').removeClass('stop-scrolling');
        $('.main-menu').slideUp();
    });
    $(".open-menu").click(function () {
        $('body').addClass('stop-scrolling');
        $('.main-menu').slideDown();
    });


    if (screen.width <= 768) {
        $('.wow').removeClass('wow');
    }

    $(document).ready(function () {
        $(window).scroll(function () {
            scrollissimo.knock();
        });
    });

    $('select[name=message-type]').on('change', function () {
        //alert( this.value );
        if (this.value == 'inquiry') {
            $('#inquiry').removeClass('d-none');
            $('#complaint').addClass('d-none');
        } else if (this.value == 'complaint') {
            $('#complaint').removeClass('d-none');
            $('#inquiry').addClass('d-none');
        } else {
            $('#complaint').addClass('d-none');
            $('#inquiry').addClass('d-none');
        }
    });


    imgInp.onchange = evt => {
        const [file] = imgInp.files
        if (file) {
            $('#blah').removeClass('d-none');
            blah.src = URL.createObjectURL(file)
        }
    }



    $("#events-filter-show").click(function () {
        $(".events-filter").slideToggle();
    });

    $(document).ready(function () {

        $('#gas-electric-close').click(function () {
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $('#gas-electric-hover').hide();
        });
        $('#asir').mousemove(function () {
            var left = 210;
            var top = 300;
            $('#gas-electric-hover p.city-name').text('في عسير');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#abha').mousemove(function () {
            var left = 210;
            var top = 210;
            $('#gas-electric-hover p.city-name').text('في أبها');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#dammam').mousemove(function () {
            var left = 320;
            var top = 320;
            $('#gas-electric-hover p.city-name').text('في الدمام');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#najran').mousemove(function () {
            var left = 260;
            var top = 260;
            $('#gas-electric-hover p.city-name').text('في نجران');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#riyadh').mousemove(function () {
            var left = 150;
            var top = 440;
            $('#gas-electric-hover p.city-name').text('في الرياض');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#qassim').mousemove(function () {
            var left = 200;
            var top = 350;
            $('#gas-electric-hover p.city-name').text('في القاصيم');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#hail').mousemove(function () {
            var left = 0;
            var top = 280;
            $('#gas-electric-hover p.city-name').text('في حائل');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#al_baha').mousemove(function () {
            var left = 170;
            var top = 180;
            $('#gas-electric-hover p.city-name').text('في الباحة');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#jeddah').mousemove(function () {
            var left = 0;
            var top = 580;
            $('#gas-electric-hover p.city-name').text('في جدة');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#medina').mousemove(function () {
            var left = 0;
            var top = 420;
            $('#gas-electric-hover p.city-name').text('في المدينة');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#tabuk').mousemove(function () {
            var left = 0;
            var top = 200;
            $('#gas-electric-hover p.city-name').text('في تبوك');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#al_jawf').mousemove(function () {
            var left = 0;
            var top = 130;
            $('#gas-electric-hover p.city-name').text('في الجوف');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });
        $('#arar').mousemove(function () {
            var left = 0;
            var top = 60;
            $('#gas-electric-hover p.city-name').text('في عرعر');
            $('#gas-electric-hover').css({ top: top, left: left }).show();
            $('#abha,#dammam,#najran,#riyadh,#qassim,#hail,#al_baha,#jeddah,#medina,#tabuk,#al_jawf,#arar,#asir').removeClass('active')
            $(this).addClass('active');
        });

    });

    var falseM = '<div class="alert alert-danger" role="alert"> لم يتم الارسال الرجاء التحقق من الحقوال</div>';
    var trueM = '<div class="alert alert-success" role="alert"> تم الارسال بنجاح</div>';

    $('form.myform [required]').focusout(function () {
        if ($(this).val() == "" || $(this).val() == '0') {
            $(this).css('border-color', 'red')
        } else {
            $(this).css('border-color', '#1B1028')
        }
    });

    function send() {

        $('form.myform [required]').each(function (indice, elemento) {
            if ($(this).val() == "" || $(this).val() == '0') {
                $(this).css('border-color', 'red')
            } else {
                $(this).css('border-color', '#1B1028')
            }
        });

        if ($('select[name=message-type]').val() == 'inquiry') {

            var person = {
                name: $("input[name=name]").val(),
                email: $("input[name=email]").val(),
                phone: $("input[name=tel]").val(),
                zone: $("select[name=inquiry-zone]").val(),
                message: $("[name=inquiry-message]").val(),
                api_key: '$2y$10$eCkSaefh3M4eBJx9sayl3O4UPPq2zwFf3KI812DkqfHuYBoRJbp3u'
            }

            //console.log(person);
            $('.output_message').html('<div class="alert alert-info" role="alert"> ارسال.. </div>');

            $.ajax({
                url: 'https://jeddahseason.sa/cms/public/api/saveInquiries',
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    //console.log(data);
                    $('.output_message').html(data.status == false ? falseM : trueM);
                    setTimeout(function () {
                        if (data.status != false) {
                            $("#contactus").modal('hide');
                        }
                    }, 1000);
                },
                data: JSON.stringify(person)
            });

        } else if ($('select[name=message-type]').val() == 'complaint') {

            $('.output_message').html('<div class="alert alert-info" role="alert"> ارسال.. </div>');

            var fileInput = "";
            if ($("input[name='file']").val()) {
                $('.imgInpBox').css('border-color', '#ddd');
                fileInput = $("input[name='file']")[0].files[0], $("input[name='file']").val();
            } else {
                $('.imgInpBox').css('border-color', 'red');
                $('.output_message').html('<div class="alert alert-danger" role="alert">الرجاء اختيار الملف المرفق</div>');
            }
            if ($("select[name=complaint-category]").val() == '0') {
                $('.output_message').html('<div class="alert alert-danger" role="alert"> الرجاء اختيار تصنيف المشكلة </div>');
            } else {
                var form = new FormData();
                form.append("file", fileInput);
                form.append("name", $("input[name=name]").val());
                form.append("email", $("input[name=email]").val());
                form.append("type", $("select[name=complaint-category]").val());
                form.append("message", $("[name=complaint-message]").val());
                form.append("zone", $("select[name=complaint-zone]").val());
                form.append("date", $("input[name=complaint-date]").val());
                form.append("phone", $("input[name=tel]").val());
                form.append("api_key", '$2y$10$eCkSaefh3M4eBJx9sayl3O4UPPq2zwFf3KI812DkqfHuYBoRJbp3u');


                var settings = {
                    "url": "https://jeddahseason.sa/cms/public/api/complaint",
                    "method": "POST",
                    "timeout": 0,
                    "processData": false,
                    "mimeType": "multipart/form-data",
                    "contentType": false,
                    "data": form
                };

                $.ajax(settings).done(function (response) {
                    varresponseData = jQuery.parseJSON(response);
                    //console.log(varresponseData);
                    $('.output_message').html(varresponseData.status == false ? falseM : trueM);
                    setTimeout(function () {
                        if (data.status != false) {
                            $("#contactus").modal('hide');
                        }
                    }, 1000);
                });
            }

        } else {

            $('.output_message').html('<div class="alert alert-danger" role="alert"> الرجاء اختيار نوع الرسالة </div>');

        }

    }



    $(".left-site-menu .menu-list .open-menu").click(function () {
        $('.left-site-menu').addClass('active')
        $(this).addClass('d-none')
        $('.left-site-menu .menu-list .close-menu').removeClass('d-none');
    });
    $(".left-site-menu .menu-list .close-menu").click(function () {
        $('.left-site-menu').removeClass('active')
        $(this).addClass('d-none')
        $('.left-site-menu .menu-list .open-menu').removeClass('d-none');
    });


    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 400) {
            $('.go-top').addClass('active');
        } else {
            $('.go-top').removeClass('active');
        }
    });

    function scrollToTop() {
        $(window).scrollTop(0);
    }


    var animtion = bodymovin.loadAnimation({
        container: document.getElementById('animation1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../img/file.json'
    })

    var divyTween1 = TweenLite.to($('.star-icon-1'), 4000, { transform: 'rotate(160deg)' });
    var divyTween3 = TweenLite.to($('.star-icon-1'), 1500, { opacity: 0 });
    var divyTween2 = TweenLite.to($('.star-icon-2'), 4000, { transform: 'rotate(160deg)' });
    var divyTween4 = TweenLite.to($('.star-icon-2'), 1500, { opacity: 0 });
    var divyTween5 = TweenLite.to($('.activities-section-bg1'), 500, { right: -275 });

    scrollissimo.add(divyTween1, 0, 6000);
    scrollissimo.add(divyTween2, 0, 6000);
    scrollissimo.add(divyTween3, 3000, 4000);
    scrollissimo.add(divyTween4, 3000, 4000);
    scrollissimo.add(divyTween5, 500, 500);

    new WOW().init();
};
