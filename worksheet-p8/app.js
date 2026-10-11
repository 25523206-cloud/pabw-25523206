const nama = "Almer Dafa Maulana";
const nim = "25523206";
const programStudi = "Sistem Informasi";
const universitas = "Universitas Islam Indonesia";

const profil = {
    nama: nama,
    nim: nim,
    programStudi: programStudi,
    universitas: universitas,
    keahlian: ["HTML", "CSS", "JavaScript"]
};

const namaTampilan = profil.nama ?? "Nama belum diisi";
const prodiTampilan = profil.programStudi ?? "Program studi belum diisi";

const kalimatPerkenalan =
    `Halo, saya ${namaTampilan}, mahasiswa ${prodiTampilan} di ${universitas}.`;

console.log(kalimatPerkenalan);
console.log("NIM:", profil.nim);
console.log("Keahlian:", profil.keahlian.join(", "));
console.log("Keahlian pertama:", profil.keahlian?.[0] ?? "Belum ada keahlian");

function buatPerkenalan(dataProfil) {
    const namaOrang = dataProfil?.nama ?? "Nama belum diisi";
    const prodiOrang = dataProfil?.programStudi ?? "Program studi belum diisi";
    const kampus = dataProfil?.universitas ?? "Universitas belum diisi";

    return `Halo, saya ${namaOrang}, mahasiswa ${prodiOrang} di ${kampus}.`;
}

function formatKeahlian(daftarKeahlian) {
    if (!Array.isArray(daftarKeahlian) || daftarKeahlian.length === 0) {
        return "Belum ada keahlian";
    }

    return daftarKeahlian.join(", ");
}

console.log(buatPerkenalan(profil));
console.log("Keahlian:", formatKeahlian(profil.keahlian));

const daftarProyek = [
    { id: 1, nama: "Website Profil", teknologi: "HTML", selesai: true },
    { id: 2, nama: "Website Styling", teknologi: "CSS", selesai: true },
    { id: 3, nama: "Aplikasi JavaScript", teknologi: "JavaScript", selesai: false }
];

const namaProyek = daftarProyek.map(proyek => proyek.nama);
console.log("Semua proyek:", namaProyek);

const proyekSelesai = daftarProyek.filter(proyek => proyek.selesai === true);
console.log("Proyek selesai:", proyekSelesai);

const proyekDitemukan = daftarProyek.find(proyek => proyek.id === 2);
console.log("Proyek ditemukan:", proyekDitemukan ?? "Proyek tidak ditemukan");

const salinanProyek = [...daftarProyek];
console.log("Jumlah proyek:", salinanProyek.length);

const profilKosong = {
    nama: null,
    programStudi: "",
    universitas: undefined,
    keahlian: []
};

console.log("Nama:", profilKosong.nama ?? "Nama belum diisi");
console.log("Universitas:", profilKosong.universitas ?? "Universitas belum diisi");
console.log("Keahlian:", formatKeahlian(profilKosong.keahlian));

const tombolTema = document.getElementById("tombol-tema");

if (tombolTema) {
    tombolTema.addEventListener("click", function () {
        document.body.classList.toggle("tema-gelap");
    });
}

const formFilm = document.getElementById("form-film");
const daftarFilmBody = document.getElementById("daftar-film-body");
const pesan = document.getElementById("pesan");

let nomorFilm = daftarFilmBody
    ? daftarFilmBody.querySelectorAll("tr").length
    : 0;

if (formFilm && daftarFilmBody) {
    formFilm.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputJudul = document.getElementById("judul-film");
        const inputTahun = document.getElementById("tahun-film");
        const inputRating = document.getElementById("rating-film");

        const judul = inputJudul?.value.trim() ?? "";
        const tahun = inputTahun?.value.trim() ?? "";
        const rating = inputRating?.value.trim() ?? "";

        if (!judul || !tahun || !rating) {
            if (pesan) {
                pesan.textContent = "Semua data film harus diisi.";
            }
            return;
        }

        nomorFilm++;

        const baris = document.createElement("tr");

        const kolomNomor = document.createElement("td");
        kolomNomor.textContent = nomorFilm;

        const kolomJudul = document.createElement("td");
        kolomJudul.textContent = judul;

        const kolomTahun = document.createElement("td");
        kolomTahun.textContent = tahun;

        const kolomRating = document.createElement("td");
        kolomRating.textContent = rating;

        baris.append(kolomNomor, kolomJudul, kolomTahun, kolomRating);
        daftarFilmBody.appendChild(baris);

        if (pesan) {
            pesan.textContent = "Film berhasil ditambahkan!";
        }

        formFilm.reset();
    });
}

console.log("JavaScript berhasil dimuat.");