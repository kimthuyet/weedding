// Đặt ngày cưới (thay đổi ngày giờ theo ý bạn)
const weddingDate = new Date("MAY 25, 2025 00:00:00").getTime();

// Cập nhật đếm ngược mỗi giây
const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Tính toán các giá trị thời gian
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị kết quả
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Nếu đếm ngược kết thúc
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "Đám cưới đã đến!";
    }
}, 1000);
