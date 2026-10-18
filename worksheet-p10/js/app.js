import { fetchNews } from './api.js';

const nama = "Almer Dafa Maulana";
const nim = "25523206";
const programStudi = "Informatika";
const universitas = "Universitas Islam Indonesia";
const jumlahProyek = 3;

const profil = {
    nama,
    nim,
    programStudi,
    universitas,
    peran: "mahasiswa Informatika",
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
console.log(buatPerkenalan({ nama: "Ayu", peran: "mahasiswa" }));
console.log(buatPerkenalan({ nama: "Budi", peran: "programmer" }));
console.log("Keahlian contoh:", formatKeahlian(["HTML", "CSS", "JavaScript"]));

const dataProfil = {
    nama: "Almer Dafa Maulana",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

const daftarProyek = [
    { judul: "Halaman Profil", tahun: 2026, selesai: true },
    { judul: "Katalog Produk", tahun: 2026, selesai: false }
];

console.log("Nama profil:", dataProfil.nama);
console.log("Proyek pertama:", daftarProyek[0]);
console.log("Judul proyek pertama:", daftarProyek[0].judul);
console.log("Nama melalui bracket:", dataProfil["nama"]);

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

const daftarAngka = [1, 2, 3];

console.log("Hasil map:", daftarAngka.map(angka => angka * 2));
console.log("Hasil filter:", daftarAngka.filter(angka => angka > 1));
console.log("Hasil find:", daftarAngka.find(angka => angka === 2));
console.log(
    "Hasil reduce:",
    daftarAngka.reduce((total, angka) => total + angka, 0)
);

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter(proyek => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find(
    proyek => proyek.judul === "Katalog Produk"
);
console.log("Katalog:", katalog);

console.log("Profil untuk pemeriksaan:", profil);
console.table(daftarProyek);

const dataUji = {};
console.log("Nama data uji:", dataUji.nama);

const dataNull = null;
console.log("Nama data null:", dataNull?.nama);

const nilaiInput = "123";
console.log("Nilai input asli:", nilaiInput);
console.log("Nilai input angka:", Number(nilaiInput));

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
            if (pesan) pesan.textContent = "Semua data wajib harus diisi.";
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

        if (keterangan) kolomJudul.title = keterangan;
        if (pesan) pesan.textContent = `Film "${judul}" berhasil ditambahkan!`;

        formFilm.reset();
    });
}

const container = document.querySelector('#list');

function render(list) {
    if (!container) return;

    container.textContent = '';

    list.forEach(function (n) {
        const card = document.createElement('article');
        const heading = document.createElement('h3');

        heading.textContent = n.title ?? 'Judul tidak tersedia';

        card.appendChild(heading);
        container.appendChild(card);
    });
}

async function loadPosts() {
    if (!container) return;

    container.textContent = 'Loading...';

    try {
        const data = await fetchNews();

        if (!Array.isArray(data)) {
            throw new Error('Format data API tidak valid.');
        }

        if (data.length === 0) {
            container.textContent = 'No posts available.';
            return;
        }

        render(data);
    } catch (error) {
        container.textContent = 'Gagal memuat data.';
        console.error('Terjadi kesalahan:', error.message);
    }
}

loadPosts();

console.log("JavaScript berhasil dimuat.");