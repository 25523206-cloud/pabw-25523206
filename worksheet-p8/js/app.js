
const nama = "Almer Dafa Maulana";
const nim = "25523206";
const programStudi = "Sistem Informasi";
const universitas = "Universitas Islam Indonesia";
const jumlahProyek = 3;

const profil = {
    nama,
    nim,
    programStudi,
    universitas,
    peran: "mahasiswa Sistem Informasi",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

// Data profil
const namaTampilan = profil.nama ?? "Nama belum diisi";
const prodiTampilan = profil.programStudi ?? "Program studi belum diisi";

console.log(
    `Halo, saya ${namaTampilan}, mahasiswa ${prodiTampilan} di ${universitas}.`
);
console.log("NIM:", profil.nim);
console.log("Keahlian:", profil.keahlian.join(", "));
console.log("Keahlian pertama:", profil.keahlian?.[0] ?? "Belum ada keahlian");
console.log("Jumlah proyek:", jumlahProyek);

// C.1 dan C.2 — Fungsi perkenalan
function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

// Fungsi alternatif: expression
const buatPerkenalanExpression = function ({ nama, peran }) {
    return `${nama} — ${peran}`;
};

// Fungsi alternatif: arrow
const buatPerkenalanArrow = ({ nama, peran }) =>
    `${nama} — ${peran}`;

// Fungsi untuk merapikan daftar keahlian
const formatKeahlian = (daftar) => {
    if (!Array.isArray(daftar) || daftar.length === 0) {
        return "Belum ada keahlian";
    }

    return daftar.join(" · ");
};

// Uji fungsi perkenalan
console.log(buatPerkenalan(profil));
console.log(buatPerkenalanExpression(profil));
console.log(buatPerkenalanArrow(profil));
console.log("Keahlian:", formatKeahlian(profil.keahlian));

// C.3 — Menguji fungsi dengan argumen berbeda
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

// Contoh array proyek
const daftarProyek = [
    { id: 1, nama: "Website Profil", teknologi: "HTML", selesai: true },
    { id: 2, nama: "Website Styling", teknologi: "CSS", selesai: true },
    { id: 3, nama: "Aplikasi JavaScript", teknologi: "JavaScript", selesai: false }
];

console.log("Semua proyek:", daftarProyek.map(proyek => proyek.nama));
console.log(
    "Proyek selesai:",
    daftarProyek.filter(proyek => proyek.selesai)
);

const proyekDitemukan = daftarProyek.find(proyek => proyek.id === 2);
console.log("Proyek ditemukan:", proyekDitemukan ?? "Proyek tidak ditemukan");
console.log("Jumlah proyek:", [...daftarProyek].length);

// Contoh data kosong untuk menguji nilai default
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

// Tombol tema gelap/terang
const tombolTema = document.getElementById("tombol-tema");

if (tombolTema) {
    tombolTema.addEventListener("click", function () {
        const aktif = document.body.classList.toggle("tema-gelap");
        tombolTema.textContent = aktif ? "Tema Terang" : "Tema Gelap";
        tombolTema.setAttribute("aria-pressed", String(aktif));
    });
}

// Form tambah film
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
