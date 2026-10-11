document.addEventListener("DOMContentLoaded", () => {
    const tombolTema = document.querySelector("#tombol-tema");
    const formFilm = document.querySelector("#form-film");
    const daftarFilm = document.querySelector("#daftar-film-body");
    const pesan = document.querySelector("#pesan");

    if (tombolTema) {
        tombolTema.addEventListener("click", () => {
            const temaGelap = document.body.classList.toggle("tema-gelap");

            tombolTema.textContent = temaGelap
                ? "Tema Terang"
                : "Tema Gelap";

            tombolTema.setAttribute("aria-pressed", String(temaGelap));
        });
    }

    if (formFilm && daftarFilm && pesan) {
        formFilm.addEventListener("submit", (event) => {
            event.preventDefault();

            const judul = document.querySelector("#judul-film").value.trim();
            const tahun = document.querySelector("#tahun-film").value;
            const rating = document.querySelector("#rating-film").value;

            if (!judul || !tahun || !rating) {
                pesan.textContent = "Mohon lengkapi semua data wajib.";
                return;
            }

            if (
                Number(tahun) < 1888 ||
                Number(tahun) > 2100 ||
                Number(rating) < 1 ||
                Number(rating) > 10
            ) {
                pesan.textContent = "Tahun atau rating tidak valid.";
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
            daftarFilm.appendChild(baris);

            formFilm.reset();
            pesan.textContent = `Film "${judul}" berhasil ditambahkan!`;
        });
    }
});