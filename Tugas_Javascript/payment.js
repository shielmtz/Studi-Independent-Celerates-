let selectedBank = "";
let paymentProof = null;

// Fungsi untuk memilih bank
function selectBank(bank) {
  selectedBank = bank;

  // Update tampilan pilihan bank
  document.querySelectorAll(".bank-option").forEach((option) => {
    option.classList.remove("selected");
  });
  const selectedOption = Array.from(
    document.querySelectorAll(".bank-option")
  ).find((option) => option.textContent === bank);
  selectedOption.classList.add("selected");
}

// Fungsi untuk memicu unggahan file
function triggerFileUpload() {
  document.getElementById("file-input").click();
}

// Fungsi untuk menangani unggahan file
function handleFileUpload(event) {
  paymentProof = event.target.files[0];
  const uploadMessage = document.getElementById("upload-message");

  if (paymentProof) {
    uploadMessage.textContent = `File uploaded: ${paymentProof.name} (Click to replace)`;
    document.getElementById("upload-section").classList.add("active");
  } else {
    uploadMessage.textContent = "Click here to upload or drop media here";
    document.getElementById("upload-section").classList.remove("active");
  }
}

// Fungsi untuk membatalkan pembayaran
function cancelPayment() {
  alert("Pembayaran dibatalkan.");
  selectedBank = "";
  paymentProof = null;
  document.querySelectorAll(".bank-option").forEach((option) => {
    option.classList.remove("selected");
  });
  document.getElementById("upload-message").textContent =
    "Click here to upload or drop media here";
  document.getElementById("upload-section").classList.remove("active");
}

// Fungsi untuk mengonfirmasi pembayaran
function confirmPayment() {
  if (!selectedBank) {
    alert("Harap pilih bank.");
    return;
  }
  if (!paymentProof) {
    alert("Harap upload bukti pembayaran.");
    return;
  }
  alert(`Pembayaran berhasil menggunakan ${selectedBank}!`);
  // Reset form setelah konfirmasi
  cancelPayment();
}
