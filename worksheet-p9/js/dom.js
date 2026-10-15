const tombolTema = document.querySelector("#tombol-tema");
const katalogFilm = document.querySelector("#katalog-film");
const filterFilm = document.querySelector("#filter-film");
const daftarFilmBody = document.querySelector("#daftar-film-body");
const formFilm = document.querySelector("#form-film");
const pesan = document.querySelector("#pesan");

const inputJudul = document.querySelector("#judul-film");
const inputTahun = document.querySelector("#tahun-film");
const inputRating = document.querySelector("#rating-film");
const inputKeterangan = document.querySelector("#keterangan");

const tombolSubmit = formFilm?.querySelector('button[type="submit"]');

const daftarFilm = [
    {
        judul: "Film Pertama",
        deskripsi: "Salah satu film yang pernah saya tonton.",
        gambar: "film-1.png",
        alt: "Poster film pertama",
        kategori: "pertama"
    },
    {
        judul: "Film Kedua",
        deskripsi: "Film yang menarik untuk ditonton.",
        gambar: "film-2.png",
        alt: "Poster film kedua",
        kategori: "kedua"
    },
    {
        judul: "Film Ketiga",
        deskripsi: "Film lain yang masuk daftar tontonan saya.",
        gambar: "film-3.png",
        alt: "Poster film ketiga",
        kategori: "ketiga"
    }
];

const daftarProyek = [
    {
        judul: "Halaman Profil",
        deskripsi: "Membuat halaman profil menggunakan HTML, CSS, dan JavaScript."
    },
    {
        judul: "Katalog Film",
        deskripsi: "Menampilkan dan memfilter daftar film."
    }
];

// D.1: Membuat kartu film
function buatKartuFilm(film) {
    const kartu = document.createElement("article");
    kartu.className = "kartu-film";
    kartu.dataset.kategori = film.kategori;

    const gambar = document.createElement("img");
    gambar.src = film.gambar;
    gambar.alt = film.alt;

    const judul = document.createElement("h3");
    judul.textContent = film.judul;

    const deskripsi = document.createElement("p");
    deskripsi.textContent = film.deskripsi;

    kartu.append(gambar, judul, deskripsi);
    return kartu;
}

// D.1: Render katalog satu kali per pemanggilan
function tampilkanKartuFilm() {
    if (!katalogFilm) return;

    const fragment = document.createDocumentFragment();

    katalogFilm.replaceChildren();

    if (daftarFilm.length === 0) {
        const pesanKosong = document.createElement("p");
        pesanKosong.textContent = "Belum ada film yang tersedia.";
        katalogFilm.append(pesanKosong);
        return;
    }

    daftarFilm.forEach((film) => {
        fragment.append(buatKartuFilm(film));
    });

    katalogFilm.append(fragment);
}

// D.1: Render data tabel
function perbaruiTabelFilm() {
    if (!daftarFilmBody) return;

    daftarFilmBody.replaceChildren();

    if (daftarFilm.length === 0) {
        const baris = document.createElement("tr");
        const sel = document.createElement("td");

        sel.colSpan = 3;
        sel.textContent = "Belum ada data film.";

        baris.append(sel);
        daftarFilmBody.append(baris);
        return;
    }

    daftarFilm.forEach((film, index) => {
        const baris = document.createElement("tr");

        const judul = document.createElement("th");
        judul.scope = "row";
        judul.textContent = film.judul;

        const tahun = document.createElement("td");
        tahun.textContent = film.tahun ?? [2023, 2024, 2025][index] ?? "-";

        const rating = document.createElement("td");
        rating.textContent = film.rating
            ? `${film.rating}/10`
            : ["8/10", "9/10", "7/10"][index] ?? "-";

        baris.append(judul, tahun, rating);
        daftarFilmBody.append(baris);
    });
}

// D.1: Menampilkan proyek
function tampilkanProyek() {
    console.table(daftarProyek);
}

// Filter kategori
function tandaiFilterAktif(tombolAktif) {
    if (!filterFilm) return;

    filterFilm.querySelectorAll("button").forEach((tombol) => {
        const aktif = tombol === tombolAktif;

        tombol.classList.toggle("active", aktif);
        tombol.setAttribute("aria-pressed", String(aktif));
    });
}

function terapkanFilter(kategori) {
    if (!katalogFilm) return;

    katalogFilm.querySelectorAll(".kartu-film").forEach((kartu) => {
        kartu.hidden =
            kategori !== "semua" &&
            kartu.dataset.kategori !== kategori;
    });
}

// Event delegation: satu listener untuk semua tombol filter
if (filterFilm) {
    filterFilm.addEventListener("click", (event) => {
        const tombol = event.target.closest("button");

        if (!tombol || !filterFilm.contains(tombol)) return;

        const kategori = tombol.dataset.kategori;
        if (!kategori) return;

        tandaiFilterAktif(tombol);
        terapkanFilter(kategori);
    });

    const tombolAwal = filterFilm.querySelector(
        '[data-kategori="semua"]'
    );

    if (tombolAwal) {
        tandaiFilterAktif(tombolAwal);
    }
}

// Tombol tema
if (tombolTema) {
    tombolTema.addEventListener("click", () => {
        const aktif = document.body.classList.toggle("tema-gelap");

        tombolTema.textContent = aktif ? "Tema Terang" : "Tema Gelap";
        tombolTema.setAttribute("aria-pressed", String(aktif));
    });
}

// D.2: Validasi form sebelum submit
function validasiForm() {
    const judul = inputJudul.value.trim();
    const tahun = Number(inputTahun.value);
    const rating = Number(inputRating.value);

    const judulValid = judul.length > 0;
    const tahunValid =
        inputTahun.value.trim() !== "" &&
        Number.isInteger(tahun) &&
        tahun >= 1888 &&
        tahun <= 2100;

    const ratingValid =
        inputRating.value.trim() !== "" &&
        Number.isInteger(rating) &&
        rating >= 1 &&
        rating <= 10;

    inputJudul.setAttribute("aria-invalid", String(!judulValid));
    inputTahun.setAttribute("aria-invalid", String(!tahunValid));
    inputRating.setAttribute("aria-invalid", String(!ratingValid));

    if (tombolSubmit) {
        tombolSubmit.disabled = !(judulValid && tahunValid && ratingValid);
    }

    return {
        valid: judulValid && tahunValid && ratingValid,
        judulValid,
        tahunValid,
        ratingValid
    };
}

if (formFilm) {
    // Periksa validitas setiap kali pengguna mengubah input
    formFilm.addEventListener("input", () => {
        validasiForm();

        if (pesan) {
            pesan.textContent = "";
        }
    });

    // Mencegah reload dan memproses data satu kali
    formFilm.addEventListener("submit", (event) => {
        event.preventDefault();

        const hasil = validasiForm();

        if (!hasil.valid) {
            if (pesan) {
                pesan.textContent = "Periksa kembali semua kolom wajib.";
            }

            if (!hasil.judulValid) {
                inputJudul.focus();
            } else if (!hasil.tahunValid) {
                inputTahun.focus();
            } else {
                inputRating.focus();
            }

            return;
        }

        const filmBaru = {
            judul: inputJudul.value.trim(),
            tahun: Number(inputTahun.value),
            rating: Number(inputRating.value),
            deskripsi: inputKeterangan.value.trim() ||
                "Film yang ditambahkan ke daftar.",
            gambar: "film-1.png",
            alt: "Poster film",
            kategori: "tambahan"
        };

        daftarFilm.push(filmBaru);

        // Render ulang setelah data berubah
        tampilkanKartuFilm();
        perbaruiTabelFilm();

        // Kartu baru juga dapat dilihat pada filter "Semua"
        const tombolSemua = filterFilm?.querySelector(
            '[data-kategori="semua"]'
        );

        if (tombolSemua) {
            tandaiFilterAktif(tombolSemua);
            terapkanFilter("semua");
        }

        if (pesan) {
            pesan.textContent = "Film berhasil ditambahkan!";
        }

        formFilm.reset();
        validasiForm();
    });
}

// Jalankan render awal
tampilkanKartuFilm();
perbaruiTabelFilm();
tampilkanProyek();
validasiForm();

console.log("dom.js berhasil dimuat.");