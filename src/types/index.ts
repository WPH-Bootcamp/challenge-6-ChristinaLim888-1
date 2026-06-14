// Tugas 1: Definisikan tipe data Book di sini
// Book harus memiliki properti: title, author, dan publicationYear
// Petunjuk: gunakan type alias atau interface untuk mendefinisikan struktur data ini
// Pastikan tipe data untuk setiap properti sudah sesuai dengan kebutuhan

/* Analogi : Buku standar resep : Menjelaskan bentuk makanan
yaitu sebuah buku resep yang berisi informasi tentang berbagai hidangan, termasuk nama hidangan (title), siapa yang menciptakan resep tersebut (author), dan tahun resep tersebut dibuat atau dipublikasikan (publicationYear). Dengan memiliki struktur data ini, kita bisa dengan mudah menyimpan dan mengelola informasi tentang berbagai buku resep yang kita miliki.

*/

export type Book = {
  title: string;
  author: string;
  publicationYear: number;
};