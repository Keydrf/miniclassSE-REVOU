function validateForm() {
  const name = document.getElementById("name").value.trim();
  const date = document.getElementById("date").value;
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("messageText").value.trim();
  const genderInput = document.querySelector('input[name="gender"]:checked');

  // Validasi wajib isi
  if (!name || !date || !phone || !message || !genderInput) {
    alert("Semua field harus diisi!");
    return false;
  }

  // Validasi nomor HP harus angka
  if (!/^\d+$/.test(phone)) {
    alert("Nomor HP hanya boleh berisi angka!");
    return false;
  }

  // Jika valid, ambil data
  const gender = genderInput.value;

  const resultBox = document.getElementById("resultBox");
  const resultContent = document.getElementById("resultContent");

  resultContent.innerHTML = `
    <table>
      <tr><td><strong>Nama</strong></td><td>:</td><td>${name}</td></tr>
      <tr><td><strong>Tanggal</strong></td><td>:</td><td>${date}</td></tr>
      <tr><td><strong>Jenis Kelamin</strong></td><td>:</td><td>${gender}</td></tr>
      <tr><td><strong>Nomor HP</strong></td><td>:</td><td>${phone}</td></tr>
      <tr><td><strong>Pesan</strong></td><td>:</td><td>${message}</td></tr>
    </table>
  `;

  resultBox.style.display = "block";
  return false; // mencegah reload
}
