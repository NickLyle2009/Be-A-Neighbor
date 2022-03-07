const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/be-a-neighbor',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)

module.exports = mongoose.connection;
