function validateForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("messageText").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const date = document.getElementById("date").value;

  if (!name || !phone || !message || !gender || !date) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Semua field harus diisi!',
    });
    return false;
  }

  if (!/^\d+$/.test(phone)) {
    Swal.fire({
      icon: 'error',
      title: 'Nomor HP tidak valid',
      text: 'Gunakan hanya angka tanpa spasi atau simbol lain.',
    });
    return false;
  }

  const now = new Date();
  const infoBox = document.getElementById("infoBox");
  infoBox.innerHTML = `
    <strong>Data Terkirim:</strong><br>
    <ul>
      <li>Waktu: ${now.toLocaleString()}</li>
      <li>Nama: ${name}</li>
      <li>Tanggal: ${date}</li>
      <li>Jenis Kelamin: ${gender.value}</li>
      <li>Nomor HP: ${phone}</li>
      <li>Pesan: ${message}</li>
    </ul>
  `;

  Swal.fire({
    icon: 'success',
    title: 'Berhasil!',
    text: 'Pesanmu telah terkirim!',
  });

  return false; // Mencegah reload halaman
}
