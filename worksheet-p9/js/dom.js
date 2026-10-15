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
        kategori: "pertama",
        tahun: 2023,
        rating: 8
    },
    {
        judul: "Film Kedua",
        deskripsi: "Film yang menarik untuk ditonton.",
        gambar: "film-2.png",
        alt: "Poster film kedua",
        kategori: "kedua",
        tahun: 2024,
        rating: 9
    },
    {
        judul: "Film Ketiga",
        deskripsi: "Film lain yang masuk daftar tontonan saya.",
        gambar: "film-3.png",
        alt: "Poster film ketiga",
        kategori: "ketiga",
        tahun: 2025,
        rating: 7
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

// Membuat satu kartu film
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

// Render katalog film
function tampilkanKartuFilm() {
    if (!katalogFilm) {
        console.error('Elemen "#katalog-film" tidak ditemukan.');
        return;
    }

    katalogFilm.replaceChildren();

    if (daftarFilm.length === 0) {
        const kosong = document.createElement("p");
        kosong.textContent = "Belum ada film yang tersedia.";
        katalogFilm.append(kosong);
        return;
    }

    const fragment = document.createDocumentFragment();

    daftarFilm.forEach((film) => {
        fragment.append(buatKartuFilm(film));
    });

    katalogFilm.append(fragment);
}

// Render tabel film
function perbaruiTabelFilm() {
    if (!daftarFilmBody) {
        console.error('Elemen "#daftar-film-body" tidak ditemukan.');
        return;
    }

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

    daftarFilm.forEach((film) => {
        const baris = document.createElement("tr");

        const judul = document.createElement("th");
        judul.scope = "row";
        judul.textContent = film.judul;

        const tahun = document.createElement("td");
        tahun.textContent = film.tahun;

        const rating = document.createElement("td");
        rating.textContent = `${film.rating}/10`;

        baris.append(judul, tahun, rating);
        daftarFilmBody.append(baris);
    });
}

// Menampilkan data proyek di Console
function tampilkanProyek() {
    console.table(daftarProyek);
}

// Memperbarui tombol filter aktif
function tandaiFilterAktif(tombolAktif) {
    if (!filterFilm) return;

    filterFilm.querySelectorAll("button").forEach((tombol) => {
        const aktif = tombol === tombolAktif;

        tombol.classList.toggle("active", aktif);
        tombol.setAttribute("aria-pressed", String(aktif));
    });
}

// Menyaring kartu film
function terapkanFilter(kategori) {
    if (!katalogFilm) return;

    const kartuFilm = katalogFilm.querySelectorAll(".kartu-film");

    kartuFilm.forEach((kartu) => {
        kartu.hidden =
            kategori !== "semua" &&
            kartu.dataset.kategori !== kategori;
    });

    const jumlahTerlihat = [...kartuFilm].filter(
        (kartu) => !kartu.hidden
    ).length;

    console.log(
        `Filter "${kategori}": ${jumlahTerlihat} film ditampilkan.`
    );
}

// Listener filter dipasang satu kali, di luar fungsi render
if (filterFilm) {
    filterFilm.addEventListener("click", (event) => {
        const tombol = event.target.closest("button");

        if (!tombol || !filterFilm.contains(tombol)) return;

        const kategori = tombol.dataset.kategori;
        if (!kategori) return;

        tandaiFilterAktif(tombol);
        terapkanFilter(kategori);
    });
} else {
    console.error('Elemen "#filter-film" tidak ditemukan.');
}

// Tema gelap
if (tombolTema) {
    tombolTema.addEventListener("click", () => {
        const aktif = document.body.classList.toggle("tema-gelap");

        tombolTema.textContent = aktif ? "Tema Terang" : "Tema Gelap";
        tombolTema.setAttribute("aria-pressed", String(aktif));
    });
}

// Validasi form
function validasiForm() {
    if (!formFilm) return false;

    const judulValid = inputJudul.value.trim() !== "";
    const tahun = Number(inputTahun.value);
    const rating = Number(inputRating.value);

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
        tombolSubmit.disabled = !(
            judulValid && tahunValid && ratingValid
        );
    }

    return judulValid && tahunValid && ratingValid;
}

if (formFilm) {
    formFilm.addEventListener("input", () => {
        validasiForm();

        if (pesan) {
            pesan.textContent = "";
        }
    });

    formFilm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validasiForm()) {
            if (pesan) {
                pesan.textContent =
                    "Mohon isi judul, tahun, dan rating dengan benar.";
            }

            if (!inputJudul.value.trim()) {
                inputJudul.focus();
            } else if (!inputTahun.checkValidity()) {
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

        tampilkanKartuFilm();
        perbaruiTabelFilm();

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

// Render pertama kali
tampilkanKartuFilm();
perbaruiTabelFilm();
tampilkanProyek();
validasiForm();

console.log("dom.js berhasil dimuat.");