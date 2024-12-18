// Simpan data pengguna secara lokal (untuk demo)
const users = [];

// Tampilkan form login
function showLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("forgot-password-form").style.display = "none";
}

// Tampilkan form sign up
function showSignUp() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("forgot-password-form").style.display = "none";
}

// Tampilkan form lupa password
function forgotPassword() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("forgot-password-form").style.display = "block";
}

// Handle login
function handleLogin() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const message = document.getElementById("login-message");

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    message.style.color = "green";
    message.textContent = "Login berhasil! Mengarahkan...";
    setTimeout(() => {
      window.location.href = "/home"; // Ganti dengan URL tujuan
    }, 2000);
  } else {
    message.style.color = "red";
    message.textContent = "Email atau password salah!";
  }
}

// Handle sign up
function handleSignUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const message = document.getElementById("signup-message");

  if (users.some((user) => user.email === email)) {
    message.style.color = "red";
    message.textContent = "Email sudah terdaftar!";
    return;
  }

  users.push({ email, password });
  message.style.color = "green";
  message.textContent = "Pendaftaran berhasil! Silakan login.";
  setTimeout(() => {
    showLogin();
  }, 2000);
}

// Handle forgot password
function handleForgotPassword() {
  const email = document.getElementById("forgot-password-email").value;
  const message = document.getElementById("forgot-password-message");

  if (users.some((user) => user.email === email)) {
    message.style.color = "green";
    message.textContent = "Email pemulihan telah dikirim!";
  } else {
    message.style.color = "red";
    message.textContent = "Email tidak terdaftar!";
  }
}
