//معرفات لغات الموقع
var langData = $('html').attr('lang');

$(document).ready(function(){
    $('.select2, #interests, #seasons, #zones').select2();
});

var monthNamesAr = [
    "",
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
];

var monthNamesEn = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// الحصول على تاريخ اليوم
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1; // القيمة الرقمية للشهر
var year = today.getFullYear();

// الحصول على تاريخ الغد
var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
var tomorrowDay = tomorrow.getDate();
var tomorrowMonth = tomorrow.getMonth()+1;
var tomorrowYear = tomorrow.getFullYear();

// عرض تاريخ اليوم بتنسيق الشهر كاسم
const dayTodayFilter = year + "-" + month + "-" + day
$('#dayTody .item-day-title').text( langData != 'en' ? 'اليوم' : 'tody' )
$('#dayTody .item-day-number').text(day)
$('#dayTody .item-day-month').text( langData === 'ar' ? monthNamesAr[month] : monthNamesEn[month] )

// عرض تاريخ الغد بتنسيق الشهر كاسم
const dayTomorrowFilter = year + "-" + tomorrowMonth + "-" + tomorrowDay
$('#dayTomorrow .item-day-title').text(langData != 'en' ? 'غدًا' : 'Tomorrow' )
$('#dayTomorrow .item-day-number').text(tomorrowDay)
$('#dayTomorrow .item-day-month').text( langData === 'ar' ? monthNamesAr[tomorrowMonth] : monthNamesEn[tomorrowMonth])

// عرض الاهتمامات
$.ajax({
    url: 'https://cpass.saudievents.sa/api/interests',
    type: 'GET',
    dataType: 'json',
    data: {
        lang: langData
    },
    success: function ({data}) {
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            var newOption = new Option(data[i].name, data[i].id, false, false);
            $('#interests').append(newOption).trigger('change');
        }
    },
    error: function (data) {
        console.log(JSON.stringify(data));
    }
});
// عرض المواسم
$.ajax({
    url: 'https://cpass.saudievents.sa/api/seasons',
    type: 'GET',
    dataType: 'json',
    data: {
        lang: langData
    },
    success: function ({data}) {
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            var newOption = new Option(data[i].name, data[i].id, false, false);
            $('#seasons').append(newOption).trigger('change');
        }
        // if (window.location.href.indexOf("index") > -1) {
        //     $('#seasons').val('38').trigger('change');
        // }
    },
    error: function (data) {
        console.log(JSON.stringify(data));
    }
});
// عرض الزونات
$.ajax({
    url: 'https://cpass.saudievents.sa/api/getzones',
    type: 'GET',
    dataType: 'json',
    data: {
        lang: langData
    },
    success: function ({data}) {
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            var newOption = new Option(data[i].name, data[i].id, false, false);
            $('#zones').append(newOption).trigger('change');
        }
    },
    error: function (data) {
        console.log(JSON.stringify(data));
    }
});
