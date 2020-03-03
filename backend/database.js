const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/recipe_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));