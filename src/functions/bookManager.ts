// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan


// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca


// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
// jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

/* Analogi : Koki : Mengolah makanan
yaitu proses memasak makanan berdasarkan resep yang sudah ditentukan. Koki akan mengambil bahan-bahan yang ada di dapur (data buku), mengolahnya sesuai dengan resep (fungsi-fungsi manajemen buku), dan menghasilkan hidangan yang siap disajikan (informasi tentang buku yang ditampilkan).

Tugas: Melakukan sesuatu terhadap data seperti: menambahkan data baru, menampilkan data, atau mencari data tertentu.
atau mungkin deleteBook, updateBook, sortBooks, dll. Tugas-tugas ini mirip dengan apa yang dilakukan koki di dapur untuk mengolah makanan sesuai dengan resep yang sudah ditentukan.

*/

import { Book } from "../types";
import { books } from "../data/books";

export function addBook(book: Book): void {
  books.push(book);

  console.log(
    `Buku "${book.title}" berhasil ditambahkan.`
  );
}

export function listBooks(): void {
  if (books.length === 0) {
    console.log("Belum ada buku yang tersimpan.");
    return;
  }

  console.log("\n=== DAFTAR BUKU ===");

  books.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`
    );
  });
}

export function searchBook(title?: string): void {
  if (!title) {
    console.log(
      "\nTidak ada keyword pencarian. Menampilkan semua buku:"
    );

    listBooks();
    return;
  }

  const results = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  console.log(`\n=== HASIL PENCARIAN: "${title}" ===`);

  if (results.length === 0) {
    console.log("Buku tidak ditemukan.");
    return;
  }

  results.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`
    );
  });
}

/* VOID
Bayangkan Ada Dua Jenis Function
Function yang menghasilkan sesuatu

Contoh:
function tambah(a: number, b: number): number {
  return a + b;
}

Kita bisa:
const hasil = tambah(2, 3);
Karena function menghasilkan: 5

Di sini TypeScript harus tahu: Function ini mengembalikan number
Makanya: > : number

Function yang hanya melakukan aksi
Contoh:
function cetakNama(): void {
  console.log("Budi");
}

Function ini tidak menghasilkan apa-apa.
Dia hanya: menampilkan teks
Maka: > : void

Kenapa Tidak Dihapus Saja? Sebenarnya boleh.
TypeScript bisa menebak sendiri:
* Oh, tidak ada return.
* Berarti void.

Jadi ini: function addBook(book: Book): void
lebih seperti:
Saya secara sengaja memberi tahu TypeScript:
Function ini hanya melakukan aksi.
Jangan berharap ada nilai yang dikembalikan.

*/