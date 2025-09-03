const mongoose = require('mongoose');

let mongoDB = process.env.URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na ligação ao MongoDB'));