const tombolTema = document.querySelector("#tombol-tema");
const daftarFilmBody = document.querySelector("#daftar-film-body");
const formFilm = document.querySelector("#form-film");
const pesan = document.querySelector("#pesan");

const inputJudul = document.querySelector("#judul-film");
const inputTahun = document.querySelector("#tahun-film");
const inputRating = document.querySelector("#rating-film");
const inputKeterangan = document.querySelector("#keterangan");

console.log("Tombol tema:", tombolTema);
console.log("Daftar film:", daftarFilmBody);
console.log("Form film:", formFilm);
console.log("Pesan:", pesan);

console.table([
    { elemen: "Tombol tema", ditemukan: tombolTema !== null },
    { elemen: "Daftar film", ditemukan: daftarFilmBody !== null },
    { elemen: "Form film", ditemukan: formFilm !== null },
    { elemen: "Pesan", ditemukan: pesan !== null },
    { elemen: "Input judul", ditemukan: inputJudul !== null },
    { elemen: "Input tahun", ditemukan: inputTahun !== null },
    { elemen: "Input rating", ditemukan: inputRating !== null },
    { elemen: "Input keterangan", ditemukan: inputKeterangan !== null }
]);

if (tombolTema) {
    tombolTema.addEventListener("click", () => {
        const aktif = document.body.classList.toggle("tema-gelap");
        tombolTema.textContent = aktif ? "Tema Terang" : "Tema Gelap";
        tombolTema.setAttribute("aria-pressed", String(aktif));
    });
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

periksaDaftarFilm();

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
        daftarFilmBody.appendChild(baris);

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

console.log("dom.js berhasil dimuat.");