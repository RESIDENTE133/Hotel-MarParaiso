const mongoose= require('mongoose');
const URI = 'mongodb://localhost/hmp_db'

mongoose.connect(URI)
  .then(db => console.log('bd conectada'))
  .catch(err => console.error(err));

  module.exports = mongoose;
