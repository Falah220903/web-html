function login() {
  const u = username.value.trim();

  if (u !== "") {
    localStorage.setItem("user", u);
    location.href = "dashboard.html";
  } else {
    error.innerText = "Username tidak boleh kosong";
  }


}

function logout() {
  location.href = "index.html";
}

// ASSESSMENT
const form = document.getElementById("formAssessment");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let skor = 0;
    document.querySelectorAll("input:checked").forEach(cb => {
      skor += Number(cb.value);
    });
    localStorage.setItem("skorPostur", skor);
    location.href = "hasil.html";
  });
}

// HASIL
const hasilBox = document.getElementById("hasilBox");
if (hasilBox) {
  const skor = Number(localStorage.getItem("skorPostur"));

  let status = "Berisiko";
  let saran = "Segera perbaiki postur duduk.";
  let img = "beresiko.jpg";

  if (skor <= 1) {
    status = "Baik";
    saran = "Pertahankan postur yang sudah benar.";
    img = "baik.jpg";
  } else if (skor <= 3) {
    status = "Perlu Perbaikan";
    saran = "Sesuaikan posisi duduk dan workstation.";
    img = "perluperbaikan.jpg";
  }

  hasilBox.innerHTML = `
    <img src="${img}" style="max-width:300px">
    <h3>Status: ${status}</h3>
    <p>Skor: ${skor}</p>
    <p>${saran}</p>
  `;
}

