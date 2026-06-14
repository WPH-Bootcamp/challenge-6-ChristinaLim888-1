"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = require("../data/books");
function addBook(book) {
    books_1.books.push(book);
    console.log(`Buku "${book.title}" berhasil ditambahkan.`);
}
function listBooks() {
    if (books_1.books.length === 0) {
        console.log("Belum ada buku yang tersimpan.");
        return;
    }
    console.log("\n=== DAFTAR BUKU ===");
    books_1.books.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
    });
}
function searchBook(title) {
    if (!title) {
        console.log("\nTidak ada keyword pencarian. Menampilkan semua buku:");
        listBooks();
        return;
    }
    const results = books_1.books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
    console.log(`\n=== HASIL PENCARIAN: "${title}" ===`);
    if (results.length === 0) {
        console.log("Buku tidak ditemukan.");
        return;
    }
    results.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
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
