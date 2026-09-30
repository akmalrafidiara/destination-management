# System Requirements Specification (SRS)

# Destination Management

## Sistem apa yang akan dibangun

Sistem manajemen destinasi yang akan membantu pengguna dalam mencari dan memilih destinasi wisata yang sesuai dengan kebutuhan mereka.

## Dengan apa sistem ini akan dibangun

Sistem ini akan dibangun dengan menggunakan teknologi web modern React.js dengan backend dan database di simpan pada Supabase. Sistem ini akan memiliki antarmuka pengguna yang responsif dan mudah digunakan, serta integrasi dengan layanan pihak ketiga seperti layanan peta dan layanan reservasi. Juga sistem ini akan di deploy di Vercel untuk memastikan ketersediaan dan skalabilitas yang baik.

## Bagaimana rancangan alur sistem pada setiap fitur yang dibangun

### Pencarian Destinasi

User dapat memasukkan kriteria pencarian seperti lokasi, jenis destinasi, dan harga. Sistem akan menampilkan daftar destinasi yang sesuai dengan kriteria tersebut. Sistem mencari data destinasi dari database Supabase dan menampilkannya di antarmuka pengguna menggunakan React.js. Sistem juga akan menyediakan filter tambahan untuk mempersempit hasil pencarian.

### Tampilan Detail Destinasi

User dapat memilih destinasi dari daftar hasil pencarian untuk melihat detailnya, termasuk deskripsi, foto, ulasan, dan informasi kontak. Sistem akan mengambil data detail destinasi dari database Supabase dan menampilkannya di antarmuka pengguna menggunakan React.js. Sistem juga akan menyediakan opsi untuk melihat ulasan dari pengguna lain dan memberikan ulasan sendiri.

### Sistem Reservasi

User dapat melakukan reservasi untuk destinasi yang dipilih melalui sistem. Sistem akan memproses reservasi dan mengirimkan konfirmasi kepada pengguna. Sistem akan menyimpan data reservasi di database Supabase dan mengirimkan notifikasi melalui email atau SMS kepada pengguna. Sistem juga akan menyediakan opsi untuk membatalkan atau mengubah reservasi jika diperlukan.

### Integrasi dengan Layanan Peta

Sistem akan menampilkan lokasi destinasi pada peta dan memberikan petunjuk arah kepada pengguna untuk mencapai destinasi tersebut. Sistem akan menggunakan API layanan peta pihak ketiga untuk menampilkan peta dan memberikan petunjuk arah. Sistem juga akan menyediakan opsi untuk melihat rute alternatif dan perkiraan waktu tempuh.

## Bagaimana alur datanya

Data akan mengalir dari pengguna ke sistem, kemudian ke database Supabase, dan kembali ke pengguna melalui antarmuka pengguna. Sistem akan memproses data tersebut dan menyimpannya di database untuk digunakan kembali.

## Apa yang diharapkan dari input dan output dari sistem ini

Input dari pengguna diharapkan berupa kriteria pencarian, pilihan destinasi, dan data reservasi. Output dari sistem diharapkan berupa daftar destinasi yang sesuai dengan kriteria pencarian, detail destinasi, konfirmasi reservasi, dan petunjuk arah ke destinasi. Sistem juga diharapkan dapat memberikan notifikasi kepada pengguna mengenai status reservasi dan informasi penting lainnya.
