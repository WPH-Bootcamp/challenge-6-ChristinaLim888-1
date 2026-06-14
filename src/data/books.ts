// Tugas 2: Buat array untuk menyimpan koleksi buku
// Array ini akan digunakan sebagai penyimpanan data sementara selama aplikasi berjalan
// Pertimbangkan tipe data yang tepat untuk array ini berdasarkan definisi Book yang sudah dibuat

/* Analogi:  Gudang : Menyimpan bahan makanan
Bayangkan array ini seperti rak buku di perpustakaan. Setiap buku yang ditambahkan akan ditempatkan di rak ini, dan kita bisa melihat semua buku yang ada di rak atau mencari buku tertentu berdasarkan judulnya.

Analogi lain:
Data : isi lemari
function : orang yang membuka lemari dan mengambil data yang dibutuhkan

*/

import { Book } from "../types";

export const books: Book[] = [];
/* Artinya: Array yang hanya boleh berisi Book

Valid:
books.push({
  title: "Clean Code",
  author: "Robert",
  publicationYear: 2008
});

Book   = 1 buku
Book[] = rak buku

Type = aturan
Data = tempat menyimpan
Function = aksi terhadap data
*/