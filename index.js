const express = require('express');
const cors = require('cors');
const connection = require('./db');
const { SERVER_PORT } = require('./env');

const app = express();
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get('/', (_, res) => {
  res.status(200).send('This route works baby!!!!')
})

// GET ALL CHARACTERS DATA
app.get('/characters', async (req, res) => {
  try {
    const select = await connection.query('SELECT * FROM `character`');
    res.status(200).json(select[0]);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Error retrieving all characters data').json({
      error: err.message
    });
  }
})

// GET ALL QUOTES DATA
app.get('/quotes', async (req, res) => {
  try {
    const select = await connection.query('SELECT * FROM quote');
    res.status(200).json(select[0]);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Error retrieving all quotes data').json({
      error: err.message
    });
  }
})

// GET ALL SOCIAL NETWORK DATA
app.get('/social-networks', async (req, res) => {
  try {
    const select = await connection.query('SELECT * FROM social_network');
    res.status(200).json(select[0]);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Error retrieving all social network data').json({
      error: err.message
    });
  }
})

// GET ALL BANNER DATA
app.get('/banners', async (req, res) => {
  try {
    const select = await connection.query('SELECT * FROM banner');
    res.status(200).json(select[0]);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Error retrieving all banners data').json({
      error: err.message
    });
  }
})

// GET ALL ASSETS DATA
app.get('/assets', async (req, res) => {
  try {
    const select = await connection.query('SELECT * FROM assets');
    res.status(200).json(select[0]);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Error retrieving all assets data').json({
      error: err.message
    });
  }
})

app.listen(SERVER_PORT, () => {
  console.log(`Server is runing on ${SERVER_PORT}`);
});
