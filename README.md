# PABW — Almer Daffa Maulana - 25523206

## Pertemuan 3 — Halaman Profil Saya

Topik halaman saya adalah daftar film yang pernah saya tonton.

- Judul halaman: Film yang Pernah Saya Tonton
- Deskripsi: Halaman ini berisi beberapa film yang pernah saya tonton beserta informasi dan rating pribadi saya.
- Tautan navigasi: Daftar Film, Tambah Film, Tentang Saya
- Dua bagian utama: Daftar Film dan Tambah Film
- Kolom tabel: Judul Film, Tahun, Sutradara, Rating Saya
- Kolom form: Judul Film, Tahun, Rating
- IMAGE : Gambar isi dari poster

## Catatan penggunaan AI

AI digunakan untuk membantu memahami langkah pengerjaan, struktur HTML5 , serta penggunaan Git dan GitHub serta pengambangan UI yang lebih menarik. Isi halaman dan rating film disesuaikan dengan pilihan saya sendiri.


## Pertemuan 4 — Design Token Halaman Profil

Halaman Pertemuan 4 menggunakan tema biru gelap dan putih agar tampilan
halaman daftar film terlihat sederhana, nyaman dibaca, dan konsisten.

Berkas gaya yang akan dibuat:
- tokens.css
- base.css
- layout.css
- komponen.css
- tema.css

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1D3A8C | tombol, tautan, dan elemen utama |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #F8FAFC | latar halaman |
| --color-surface | #FFFFFF | latar kartu dan bagian konten |
| --color-border | #D1D5DB | garis tabel dan kartu |
| --color-focus | #2563EB | garis fokus input |
| --color-danger | #B00020 | tanda kesalahan form |
| --space-4 | 1rem | jarak standar antar elemen |
| --space-6 | 1.5rem | jarak antar bagian |
| --radius-md | 0.5rem | sudut tombol dan kartu |

Kriteria selesai saya: mengubah --color-primary di satu baris pada
tokens.css harus mengubah warna tombol, tautan, judul, dan elemen fokus
yang menggunakan token tersebut.

## catatan penggunaan AI

AI digunakan untuk membantu memahami konsep design token, struktur CSS, dan memberikan saran perbaikan tampilan. Kode dan hasil akhir disesuaikan serta diperiksa kembali oleh saya.

## Pertemuan 9 — DOM, Events, dan Interaktivitas Halaman

Pada Pertemuan 9, saya melanjutkan pengembangan halaman **Film yang Pernah Saya Tonton** dengan mempelajari manipulasi DOM, event listener, event delegation, rendering data, serta debugging interaksi pada halaman web.

### Materi dan Pekerjaan yang Dikerjakan

- Menggunakan `querySelector()` untuk memilih elemen HTML berdasarkan selector.
- Menggunakan `querySelectorAll()` untuk memilih beberapa elemen HTML sekaligus.
- Menggunakan `Array.from()` untuk mengubah NodeList menjadi array.
- Membuat elemen HTML menggunakan `createElement()`.
- Menggunakan `textContent` untuk menampilkan teks pada elemen secara aman.
- Menggunakan `append()` untuk menambahkan elemen ke dalam container.
- Menggunakan `replaceChildren()` untuk mengosongkan atau mengganti isi container sebelum rendering.
- Menggunakan `classList.toggle()` untuk menambahkan atau menghapus class CSS.
- Menggunakan `addEventListener()` untuk menangani interaksi pengguna.
- Mempelajari event delegation agar satu listener pada elemen parent dapat menangani event dari elemen anak.
- Menggunakan `event.target.closest()` untuk menemukan elemen terdekat yang sesuai dengan selector.
- Menggunakan `preventDefault()` untuk mencegah perilaku bawaan browser ketika diperlukan.
- Mempelajari `dataset` untuk membaca nilai dari atribut `data-*` pada elemen HTML.
- Menguji tombol filter film untuk menampilkan daftar film sesuai kategori.
- Menggunakan browser Console untuk memeriksa hasil interaksi dan membantu proses debugging.

### Hasil Pengujian

- Tombol filter **Semua** menampilkan tiga film.
- Setiap tombol filter film menampilkan satu film sesuai kategorinya.
- Poster film ditampilkan pada halaman.
- Hasil interaksi diperiksa melalui browser dan Console.

### Catatan Penggunaan AI

AI digunakan untuk membantu memahami konsep DOM, pemilihan elemen HTML, rendering data, event listener, event delegation, dan debugging. Kode disesuaikan dengan halaman yang saya kembangkan dan diperiksa kembali melalui browser serta Console.