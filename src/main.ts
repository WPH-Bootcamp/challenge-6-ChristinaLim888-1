// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

/* Analogi : Kasir : Tempat pelanggan memesan makanan dan melihat menu
Tugas : Menjalankan program
Ibarat main.ts ini untuk titik masuk aplikasi
jadi setelah semua siap, maka yg menekan tombol "Play" adalah main.ts

Alurnya:
types
  ↓
data
  ↓
functions
  ↓
main

*/

console.log("Book Management Application - Challenge 6");
console.log("=====================================");

// Mulai pengujian di bawah ini

import {
  addBook,
  listBooks,
  searchBook,
} from "./functions/bookManager";

addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  publicationYear: 2008,
});

addBook({
  title: "Atomic Habits",
  author: "James Clear",
  publicationYear: 2018,
});

addBook({
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  publicationYear: 2018,
});

addBook({
  title: "Percobaan Christina",
  author: "Christina Lim",
  publicationYear: 2026,
});

console.log("\n");

listBooks();

console.log("\n");

searchBook("Code");

console.log("\n");

searchBook("JavaScript");

console.log("\n");

searchBook("React");

console.log("\n");

searchBook("christina");

console.log("\n");

searchBook();