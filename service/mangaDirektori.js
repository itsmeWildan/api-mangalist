// Membuat fungsi

const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const rows = await db.query(
    `SELECT id, judul, penulis, penerbit, tanggal_rilis, rating, jumlah_volume, url_baca
    FROM manga`
  );
  const data = helper.CekRow(rows);

  return {
    data
  };
}

// Insert data
async function create(mangaData) {
  try {
    const result = await db.query(
      `INSERT INTO manga 
      (judul, penulis, penerbit, tanggal_rilis, rating, jumlah_volume, url_baca) 
      VALUES 
      ('${mangaData.judul}', '${mangaData.penulis}', '${mangaData.penerbit}', '${mangaData.tanggal_rilis}', ${mangaData.rating}, ${mangaData.jumlah_volume}, '${mangaData.url_baca}')`
    );

    if (result.affectedRows) {
      return { message: 'Manga created successfully' };
    } else {
      return { message: 'Error in creating manga' };
    }
  } catch (error) {
    // Handle any database errors here
    return { message: 'Error in creating manga' };
  }
}

// PUT Update Manga
// update data yang berasal dari [ req.body ] dan memakai endpoint [ /mangalists/:id ] 
async function update(id, mangaData) {
  try {
    const result = await db.query(
      `UPDATE manga 
      SET judul="${mangaData.judul}", penulis="${mangaData.penulis}", penerbit="${mangaData.penerbit}", 
      tanggal_rilis="${mangaData.tanggal_rilis}", rating=${mangaData.rating}, jumlah_volume=${mangaData.jumlah_volume}, 
      url_baca="${mangaData.url_baca}"
      WHERE id=${id}`
    );

    if (result.affectedRows) {
      return { message: 'Manga updated successfully' };
    } else {
      return { message: 'Error in updating manga' };
    }
  } catch (error) {
    // Handle any database errors here
    return { message: 'Error in updating manga' };
  }
}

// DELETE Manga
// Untuk menghapus manga, kita memakai metode DELETE REST API. Kita akan menghapus data bedasarkan :id dan kita akan memakai endpoint /mangalists/:id
async function remove(id) {
  try {
    const result = await db.query(
      `DELETE FROM manga WHERE id=${id}`
    );

    if (result.affectedRows) {
      return { message: 'Manga berhasil dihapus' };
    } else {
      return { message: 'Error saat menghapus' };
    }
  } catch (error) {
    // Handle any database errors here
    return { message: 'Error saat menghapus' };
  }
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
};