// Fungsi untuk menampilkan modal detail saat produk diklik
function tampilDetail(nama, ukuran, harga, deskripsi) {
    document.getElementById("modalTitle").innerText = nama;
    document.getElementById("modalSize").innerText = ukuran;
    document.getElementById("modalPrice").innerText = harga;
    document.getElementById("modalDesc").innerText = deskripsi;
    
    // Tampilkan kotak modal
    document.getElementById("modalDetail").style.display = "flex";
}

// Fungsi untuk menutup modal
function tutupModal() {
    document.getElementById("modalDetail").style.display = "none";
}

// Fungsi saat tombol pesan diklik
function pesanSekarang() {
    alert("Terima kasih! Pesanan Anda sedang diproses.");
    tutupModal();
}

// Menutup modal jika pengguna mengklik area di luar kotak putih modal
window.onclick = function(event) {
    let modal = document.getElementById("modalDetail");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}