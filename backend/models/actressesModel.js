const mongoose = require('mongoose');

const actressesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birth_year: {
    type: Number,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  mostFamousMovies: {
    type: [String],
    default: [],
  },
  awards: {
    type: String,
  },
  biography: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Actresses = mongoose.model('Actresses ', actressesSchema);

module.exports = Actresses;
