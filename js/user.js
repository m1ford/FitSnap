const form = document.getElementById("formLogin");
let nomorUrut = 1; 

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 1. Mengambil nilai input
    const inputNama = document.getElementById("nama").value;
    const inputTinggi = document.getElementById("tinggi").value;
    const inputBerat = document.getElementById("berat").value;

    // 2. Mengubah teks input menjadi angka desimal
    const tinggiCm = parseFloat(inputTinggi);
    const beratKg = parseFloat(inputBerat);

    // 3. Validasi input
    if (isNaN(tinggiCm) || isNaN(beratKg) || tinggiCm <= 0 || beratKg <= 0) {
        alert("Mohon masukkan angka tinggi dan berat badan yang valid!");
        return;
    }

    // 4. Proses Perhitungan Rumus BMI
    const tinggiMeter = tinggiCm / 100;
    const bmi = beratKg / (tinggiMeter * tinggiMeter);
    const skorDibulatkan = bmi.toFixed(1); 

    // 5. Menentukan Kategori dan Warna Badge Bootstrap
    let kategori = "";
    let warnaBadge = ""; 

    if (bmi < 18.5) {
        kategori = "Kurus";
        warnaBadge = "bg-warning text-dark";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = "Normal (Ideal)";
        warnaBadge = "bg-success text-white";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        kategori = "Gemuk";
        warnaBadge = "bg-warning text-dark";
    } else {
        kategori = "Obesitas";
        warnaBadge = "bg-danger text-white";
    }

    // Tampilkan pesan pop-up alert
    alert(`Halo ${inputNama},\nHasil Perhitungan BMI Anda:\n\nSkor BMI: ${skorDibulatkan}\nKategori: ${kategori}`);

    // 6. Logika Pembuatan Tabel Otomatis
    const tabelBody = document.getElementById("tempatTabel");
    const barisKosong = document.getElementById("barisKosong");

    if (barisKosong) {
        barisKosong.remove();
    }

    // Membuat elemen baris (<tr>) baru
    const barisBaru = tabelBody.insertRow();

    // Mengisi kolom-kolom (<td>) secara berurutan (Total 6 Kolom)
    barisBaru.insertCell(0).innerText = nomorUrut++;      // Kolom 0: No
    barisBaru.insertCell(1).innerText = inputNama;         // Kolom 1: Nama
    barisBaru.insertCell(2).innerText = tinggiCm + " cm";  // Kolom 2: Tinggi
    barisBaru.insertCell(3).innerText = beratKg + " kg";   // Kolom 3: Berat
    barisBaru.insertCell(4).innerText = skorDibulatkan;    // Kolom 4: Skor BMI
    barisBaru.insertCell(5).innerHTML = `<span class="badge ${warnaBadge} p-2">${kategori}</span>`; // Kolom 5: Kategori

    // 7. Reset form input agar kosong kembali
    form.reset();
});