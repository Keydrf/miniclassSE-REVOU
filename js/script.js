function validateForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("messageText").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!name || !phone || !message || !gender) {
    alert("Semua field harus diisi!");
    return false;
  }

  if (!/^\d+$/.test(phone)) {
    alert("Nomor HP harus berupa angka!");
    return false;
  }

  const now = new Date();
  const infoBox = document.getElementById("infoBox");
  infoBox.innerHTML = `
    <p>Current time: ${now.toLocaleString()}</p>
    <p>Nama: ${name}</p>
    <p>Jenis Kelamin: ${gender.value}</p>
    <p>Nomor HP: ${phone}</p>
    <p>Pesan: ${message}</p>
  `;

  return false; // Prevent form submission
}
