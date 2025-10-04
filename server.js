// server.js
const express = require("express");
const app = express();
const port = 8001;

// Dummy data artikel
const articles = [
  {
    id: 1,
    title: "Belajar Express.js untuk Pemula",
    urlimage: "http://localhost:8000/images/image.png",
    description: "Express.js adalah salah satu framework Node.js yang ringan dan fleksibel untuk membangun aplikasi web maupun API.",
    author: "Raden Walangsungsang"
  },
  {
    id: 2,
    title: "Membuat API dengan Node.js",
    urlimage: "http://localhost:8000/images/gambar.png",
    description: "Untuk membuat API sederhana dengan Node.js dan Express, langkah pertama adalah memastikan Node.js sudah terpasang di komputer.",
    author: "Empu Gandring"
  }
];

// Endpoint untuk mengambil semua artikel
app.get("/api/test/getarticle", (req, res) => {
  res.json(articles);
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
