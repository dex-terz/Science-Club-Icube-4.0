(function ($) {
    $.fn.downCount = function (options, callback) {
        var settings = $.extend({ date: "01/10/2024 00:00:00", offset: 1 }, options);
        if (!settings.date) {
            $.error("Date is not defined.");
        }
        if (!Date.parse(settings.date)) {
            $.error(
                "Incorrect date format, it should look like this, 11/21/2021 12:00:00."
            );
        }
        var container = this;
        var currentDate = function () {
            var date = new Date();
            var utc = date.getTime() + date.getTimezoneOffset() * 60000;
            var new_date = new Date(utc + 3600000 * settings.offset);
            return new_date;
        };
        function countdown() {
            var target_date = new Date(settings.date),
                current_date = currentDate();
            var difference = target_date - current_date;
            if (difference < 0) {
                clearInterval(interval);
                if (callback && typeof callback === "function") callback();
                return;
            }
            var _second = 1000,
                _minute = _second * 60,
                _hour = _minute * 60,
                _day = _hour * 24;
            var days = Math.floor(difference / _day),
                hours = Math.floor((difference % _day) / _hour),
                minutes = Math.floor((difference % _hour) / _minute),
                seconds = Math.floor((difference % _minute) / _second);
            days = String(days).length >= 2 ? days : "0" + days;
            hours = String(hours).length >= 2 ? hours : "0" + hours;
            minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
            seconds = String(seconds).length >= 2 ? seconds : "0" + seconds;
            var ref_days = days === 1 ? "day" : "days",
                ref_hours = hours === 1 ? "hour" : "hours",
                ref_minutes = minutes === 1 ? "minute" : "minutes",
                ref_seconds = seconds === 1 ? "second" : "seconds";
            container.find(".days").text(days);
            container.find(".hours").text(hours);
            container.find(".minutes").text(minutes);
            container.find(".seconds").text(seconds);
            container.find(".days_ref").text(ref_days);
            container.find(".hours_ref").text(ref_hours);
            container.find(".minutes_ref").text(ref_minutes);
            container.find(".seconds_ref").text(ref_seconds);
        }
        var interval = setInterval(countdown, 1000);
    };
})(jQuery);


function cd(){
    var countDownDate = new Date("Jan 28, 2025 12:00:00 ").getTime();
var x= setInterval(function(){
   var now = new Date().getTime();
    var distance= countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

   if (distance<0){
       clearInterval(x);
        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";
   }     
},1000);
}
cd();
