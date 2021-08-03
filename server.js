require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const PORT = 4000;

const SearchModel = require('./models/SearchSchema');

// prisijungimas prie duomenu bazes
mongoose
  .connect(process.env.MONGO_CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Conneced to Mongo ooooooooose');
  })
  .catch((err) => console.error(err.message));

// MIddleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json(`Serveris veikia an port ${PORT}`);
});

// new search history
app.post('/search_history/new', (req, res) => {
  console.log(req.body);

  const saveSearch = new SearchModel(req.body);

  saveSearch
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

// get search history
app.get('/search_history', async (req, res) => {
  try {
    const articleTitles = await SearchModel.find();
    res.json(articleTitles);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(PORT, console.log(`Back end online on port ${PORT}`));
