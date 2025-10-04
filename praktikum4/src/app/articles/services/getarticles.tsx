// src/app/articles/services/getarticles.js
export async function getArticles() {
  try {
    const res = await fetch("http://localhost:8001/api/test/getarticle");
    if (!res.ok) {
      throw new Error("Gagal mengambil data artikel");
    }

    const data = await res.json();
    console.log("Data dari API:", data); // buat cek di terminal
    return data; // langsung return array
  } catch (error) {
    console.error("Error fetching articles:", error);
    return []; // fallback biar nggak undefined
  }
}
