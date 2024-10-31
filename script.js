// script.js

// Contoh fungsi untuk menampilkan pesan ketika formulir kontak dikirim
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default
        
        // Ambil nilai dari input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Tampilkan pesan konfirmasi
        alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
        
        // Kosongkan formulir setelah pengiriman
        form.reset();
    });
});
