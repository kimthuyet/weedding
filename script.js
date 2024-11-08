// Cài đặt thời gian đếm ngược đến ngày cưới
const weddingDate = new Date("Dec 31, 2024 00:00:00").getTime();

const countdown = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = weddingDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").querySelector(".heart").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").querySelector(".heart").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").querySelector(".heart").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").querySelector(".heart").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("days").querySelector(".heart").innerHTML = "00";
        document.getElementById("hours").querySelector(".heart").innerHTML = "00";
        document.getElementById("minutes").querySelector(".heart").innerHTML = "00";
        document.getElementById("seconds").querySelector(".heart").innerHTML = "00";
    }
}, 1000);
