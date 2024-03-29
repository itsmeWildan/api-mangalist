// Membuat rute untuk API

const express = require('express');
const router = express.Router();
const mangaDirektori = require('../service/mangaDirektori');

/* GET Manga */
router.get('/', async function(req, res, next) {
  try {
    res.json(await mangaDirektori.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error mengambil data Manga `, err.message);
    next(err);
  }
});

// ekspor fungsi (POST) create di service/mangaDirektori.js
router.post('/', async function(req, res, next){
  try{
    res.json(await mangaDirektori.create(req.body))
  } catch (err) {
    console.error(`Error membuat data manga`, err.message);
    next(err);
  }
})

// ekspor fungsi (PUT) create di service/mangaDirektori.js
router.put('/:id', async function(req, res, next){
  try{
    res.json(await mangaDirektori.update(req.params.id, req.body))
  } catch (err) {
    console.error(`Error Update data manga`, err.message);
    next(err);
  }
})

// DELETE
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await mangaDirektori.remove(req.params.id));
  } catch (err) {
    console.error(`Error saat menghapus manga`, err.message);
    next(err);
  }
});

module.exports = router;