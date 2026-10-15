const tombolTema = document.querySelector("#tombol-tema");
const daftarFilmBody = document.querySelector("#daftar-film-body");
const formFilm = document.querySelector("#form-film");
const pesan = document.querySelector("#pesan");
const katalogFilm = document.querySelector("#katalog-film");
const filterFilm = document.querySelector("#filter-film");

const inputJudul = document.querySelector("#judul-film");
const inputTahun = document.querySelector("#tahun-film");
const inputRating = document.querySelector("#rating-film");
const inputKeterangan = document.querySelector("#keterangan");

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
        judul: "Katalog Produk",
        deskripsi: "Menampilkan daftar produk dalam bentuk kartu."
    }
];

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

function tampilkanKartuFilm() {
    if (!katalogFilm) return;

    const fragment = document.createDocumentFragment();

    daftarFilm.forEach((film) => {
        fragment.append(buatKartuFilm(film));
    });

    katalogFilm.replaceChildren(fragment);
}

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
        kartu.hidden = kategori !== "semua" && kartu.dataset.kategori !== kategori;
    });
}

if (filterFilm) {
    filterFilm.addEventListener("click", (event) => {
        const tombol = event.target.closest("button");

        if (!tombol || !filterFilm.contains(tombol)) return;

        const kategori = tombol.dataset.kategori;

        if (!kategori) return;

        tandaiFilterAktif(tombol);
        terapkanFilter(kategori);
    });

    const tombolAwal = filterFilm.querySelector('[data-kategori="semua"]');

    if (tombolAwal) {
        tandaiFilterAktif(tombolAwal);
    }
}

function tampilkanProyek() {
    console.table(daftarProyek);
}

function periksaDaftarFilm() {
    if (!daftarFilmBody) return;

    let pesanKosong = document.querySelector("#pesan-kosong");

    if (daftarFilmBody.querySelectorAll("tr").length === 0) {
        if (!pesanKosong) {
            pesanKosong = document.createElement("p");
            pesanKosong.id = "pesan-kosong";
            pesanKosong.textContent = "Belum ada film dalam daftar.";
            daftarFilmBody.closest("table")?.insertAdjacentElement("afterend", pesanKosong);
        }
    } else if (pesanKosong) {
        pesanKosong.remove();
    }
}

if (tombolTema) {
    tombolTema.addEventListener("click", () => {
        const aktif = document.body.classList.toggle("tema-gelap");
        tombolTema.textContent = aktif ? "Tema Terang" : "Tema Gelap";
        tombolTema.setAttribute("aria-pressed", String(aktif));
    });
}

if (formFilm && daftarFilmBody) {
    formFilm.addEventListener("submit", (event) => {
        event.preventDefault();

        const judul = inputJudul?.value.trim() ?? "";
        const nilaiTahun = inputTahun?.value ?? "";
        const nilaiRating = inputRating?.value ?? "";
        const keterangan = inputKeterangan?.value.trim() ?? "";
        const tahun = Number(nilaiTahun);
        const rating = Number(nilaiRating);

        if (!judul || !nilaiTahun || !nilaiRating) {
            if (pesan) pesan.textContent = "Judul, tahun, dan rating wajib diisi.";
            return;
        }

        if (!Number.isInteger(tahun) || tahun < 1888 || tahun > 2100) {
            if (pesan) pesan.textContent = "Tahun film harus berupa bilangan bulat antara 1888 dan 2100.";
            inputTahun?.focus();
            return;
        }

        if (!Number.isInteger(rating) || rating < 1 || rating > 10) {
            if (pesan) pesan.textContent = "Rating harus berupa bilangan bulat dari 1 sampai 10.";
            inputRating?.focus();
            return;
        }

        const baris = document.createElement("tr");
        const kolomJudul = document.createElement("th");
        const kolomTahun = document.createElement("td");
        const kolomRating = document.createElement("td");

        kolomJudul.scope = "row";
        kolomJudul.textContent = judul;
        kolomTahun.textContent = String(tahun);
        kolomRating.textContent = `${rating}/10`;

        if (keterangan) kolomJudul.title = keterangan;

        baris.append(kolomJudul, kolomTahun, kolomRating);
        daftarFilmBody.append(baris);

        periksaDaftarFilm();

        if (pesan) pesan.textContent = `Film "${judul}" berhasil ditambahkan!`;

        formFilm.reset();

        console.log("Film baru ditambahkan:", {
            judul,
            tahun,
            rating,
            keterangan
        });
    });
}

tampilkanKartuFilm();
tampilkanProyek();
periksaDaftarFilm();

console.log("dom.js berhasil dimuat.");