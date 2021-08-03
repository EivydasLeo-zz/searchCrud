const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SearchModel = mongoose.model('SearchModel', SearchSchema);

module.exports = SearchModel;
