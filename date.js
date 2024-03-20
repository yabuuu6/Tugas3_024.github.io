function show() {
    var result = confirm("Apakah Anda ingin melanjutkan?");
    if (result) {
        var grupWhatsAppLink = "https://chat.whatsapp.com/Ja3uIfQhTXWGal9oYYplYs"; 
        window.open(grupWhatsAppLink, "_blank");
    } else {
        // Kode untuk jika pengguna menekan Cancel
        console.log("Pengguna membatalkan aksi.");
    }
}
document.addEventListener('DOMContentLoaded', function() {
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1; // Bulan dimulai dari 0
    var year = now.getFullYear();

    // Tambahkan nol di depan angka jika < 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    var waktu = hours + ':' + minutes + ':' + seconds;
    var tanggal = day + '/' + month + '/' + year;

    // Pastikan Anda memiliki elemen dengan id 'jam' di HTML Anda
    document.getElementById('jam').innerHTML = waktu + ' ' + tanggal;
}

// Panggil fungsi updateClock setiap 1 detik
setInterval(updateClock, 1000);
});
// Panggil updateClock() saat halaman dimuat
updateClock();
