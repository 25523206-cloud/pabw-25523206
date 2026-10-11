
const nama = "Almer Dafa Maulana";
const nim = "25523206";
const programStudi = "Sistem Informasi";
const universitas = "Universitas Islam Indonesia";
const jumlahProyek = 3;

// Data profil
const profil = {
    nama,
    nim,
    programStudi,
    universitas,
    peran: "mahasiswa Sistem Informasi",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

const namaTampilan = profil.nama ?? "Nama belum diisi";
const prodiTampilan = profil.programStudi ?? "Program studi belum diisi";

console.log(
    `Halo, saya ${namaTampilan}, mahasiswa ${prodiTampilan} di ${universitas}.`
);
console.log("NIM:", profil.nim);
console.log("Keahlian:", profil.keahlian.join(", "));
console.log("Keahlian pertama:", profil.keahlian?.[0] ?? "Belum ada keahlian");
console.log("Jumlah proyek:", jumlahProyek);

// LEMBAR C — FUNGSI
function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

const buatPerkenalanExpression = function ({ nama, peran }) {
    return `${nama} — ${peran}`;
};

const buatPerkenalanArrow = ({ nama, peran }) =>
    `${nama} — ${peran}`;

const formatKeahlian = (daftar) => {
    if (!Array.isArray(daftar) || daftar.length === 0) {
        return "Belum ada keahlian";
    }

    return daftar.join(" · ");
};

console.log(buatPerkenalan(profil));
console.log(buatPerkenalanExpression(profil));
console.log(buatPerkenalanArrow(profil));
console.log("Keahlian:", formatKeahlian(profil.keahlian));

console.log(
    buatPerkenalan({ nama: "Ayu", peran: "mahasiswa" })
);
console.log(
    buatPerkenalan({ nama: "Budi", peran: "programmer" })
);
console.log(
    "Keahlian contoh:",
    formatKeahlian(["HTML", "CSS", "JavaScript"])
);

// LEMBAR D.1 — OBJECT DAN ARRAY OF OBJECT
const dataProfil = {
    nama: "Almer Dafa Maulana",
    peran: "Mahasiswa Sistem Informasi",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

const daftarProyek = [
    {
        judul: "Halaman Profil",
        tahun: 2026,
        selesai: true
    },
    {
        judul: "Katalog Produk",
        tahun: 2026,
        selesai: false
    }
];

console.log("Nama profil:", dataProfil.nama);
console.log("Proyek pertama:", daftarProyek[0]);
console.log("Judul proyek pertama:", daftarProyek[0].judul);
console.log("Nama melalui bracket:", dataProfil["nama"]);

// LEMBAR D.2 — MENYALIN OBJECT DAN ARRAY
const salinanProfil = { ...dataProfil };
console.log("Salinan profil:", salinanProfil);

const urutProyek = [...daftarProyek].sort(
    (a, b) => a.judul.localeCompare(b.judul)
);
console.log("Proyek terurut:", urutProyek);

const proyekJudulA = daftarProyek.filter(
    proyek => proyek.judul === "Halaman Profil"
);
console.log("Proyek Halaman Profil:", proyekJudulA);
console.log("Data proyek asli:", daftarProyek);

// LEMBAR D.3 — MAP, FILTER, FIND, REDUCE
const daftarAngka = [1, 2, 3];

const angkaDikaliDua = daftarAngka.map(angka => angka * 2);
console.log("Hasil map:", angkaDikaliDua);

const angkaLebihDariSatu = daftarAngka.filter(angka => angka > 1);
console.log("Hasil filter:", angkaLebihDariSatu);

const angkaDitemukan = daftarAngka.find(angka => angka === 2);
console.log("Hasil find:", angkaDitemukan);

const jumlahAngka = daftarAngka.reduce(
    (total, angka) => total + angka,
    0
);
console.log("Hasil reduce:", jumlahAngka);

// OUTPUT CONSOLE SESUAI LEMBAR D
console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter(proyek => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find(
    proyek => proyek.judul === "Katalog Produk"
);
console.log("Katalog:", katalog);

// LEMBAR E — CONTOH DEBUGGING DAN PENANGANAN DATA
console.log("Profil untuk pemeriksaan:", profil);
console.table(daftarProyek);

// E.4 — Kasus undefined
const dataUji = {};
console.log("Nama data uji:", dataUji.nama);

// E.4 — Kasus null
const dataNull = null;

// Baris ini akan error jika dijalankan karena dataNull adalah null:
// console.log(dataNull.nama);

// Versi aman menggunakan optional chaining
console.log("Nama data null:", dataNull?.nama);

// E.4 — Nilai input yang perlu dikonversi
const nilaiInput = "123";
console.log("Nilai input asli:", nilaiInput);
console.log("Nilai input angka:", Number(nilaiInput));

// Contoh data kosong dan nilai default
const profilKosong = {
    nama: null,
    programStudi: "",
    universitas: undefined,
    keahlian: []
};

console.log("Nama:", profilKosong.nama ?? "Nama belum diisi");
console.log(
    "Universitas:",
    profilKosong.universitas ?? "Universitas belum diisi"
);
console.log("Keahlian:", formatKeahlian(profilKosong.keahlian));

// TOMBOL TEMA GELAP/TERANG
const tombolTema = document.getElementById("tombol-tema");

if (tombolTema) {
    tombolTema.addEventListener("click", function () {
        const aktif = document.body.classList.toggle("tema-gelap");
        tombolTema.textContent = aktif ? "Tema Terang" : "Tema Gelap";
        tombolTema.setAttribute("aria-pressed", String(aktif));
    });
}

// FORM TAMBAH FILM
const formFilm = document.getElementById("form-film");
const daftarFilmBody = document.getElementById("daftar-film-body");
const pesan = document.getElementById("pesan");

if (formFilm && daftarFilmBody) {
    formFilm.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputJudul = document.getElementById("judul-film");
        const inputTahun = document.getElementById("tahun-film");
        const inputRating = document.getElementById("rating-film");
        const inputKeterangan = document.getElementById("keterangan");

        const judul = inputJudul.value.trim();
        const tahun = Number(inputTahun.value);
        const rating = Number(inputRating.value);
        const keterangan = inputKeterangan?.value.trim() ?? "";

        if (!judul || !inputTahun.value || !inputRating.value) {
            if (pesan) {
                pesan.textContent = "Semua data wajib harus diisi.";
            }
            return;
        }

        if (!Number.isInteger(tahun) || tahun < 1888 || tahun > 2100) {
            if (pesan) {
                pesan.textContent = "Tahun film harus antara 1888 dan 2100.";
            }
            inputTahun.focus();
            return;
        }

        if (!Number.isInteger(rating) || rating < 1 || rating > 10) {
            if (pesan) {
                pesan.textContent = "Rating harus berupa angka 1 sampai 10.";
            }
            inputRating.focus();
            return;
        }

        const baris = document.createElement("tr");

        const kolomJudul = document.createElement("th");
        kolomJudul.scope = "row";
        kolomJudul.textContent = judul;

        const kolomTahun = document.createElement("td");
        kolomTahun.textContent = tahun;

        const kolomRating = document.createElement("td");
        kolomRating.textContent = `${rating}/10`;

        baris.append(kolomJudul, kolomTahun, kolomRating);
        daftarFilmBody.appendChild(baris);

        if (keterangan) {
            kolomJudul.title = keterangan;
        }

        if (pesan) {
            pesan.textContent = `Film "${judul}" berhasil ditambahkan!`;
        }

        formFilm.reset();
    });
}

console.log("JavaScript berhasil dimuat.");
    