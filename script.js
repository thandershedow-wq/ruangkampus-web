const tombolMenu = document.getElementById('tombol-menu');
const menuUtama = document.getElementById('menu-utama');

// Toggle Menu Navigasi Utama
tombolMenu.addEventListener('click', () => {
  const sedangBuka = tombolMenu.getAttribute('aria-expanded') === 'true';
  tombolMenu.setAttribute('aria-expanded', !sedangBuka);
  menuUtama.hidden = sedangBuka;
});

// Interaksi Tombol Pinjam Ruangan
const tombolPinjam = document.querySelectorAll('.btn-pinjam');
const infoStatus = document.getElementById('info-status');

tombolPinjam.forEach((btn) => {
  btn.addEventListener('click', () => {
    const namaRuangan = btn.dataset.nama;
    infoStatus.textContent = `Pengajuan peminjaman untuk "${namaRuangan}" berhasil dikirim dan sedang menunggu verifikasi admin.`;
    infoStatus.style.color = var(--warna-utama);
  });
});
