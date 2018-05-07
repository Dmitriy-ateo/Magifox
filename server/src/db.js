// DB options and connections

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});

mongoose.connection.on('error', function (err) {
  console.log('Could not connect to mongo server!');
  console.log(err);
});

// mongodb://username:password@host:port/DataBase
mongoose.connect('mongodb://127.0.0.1:27017/test');
