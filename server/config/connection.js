
require('dotenv').config();


const mongoose = require('mongoose');
// in .env file:
const connStr = process.env.MONGODB_URI;
mongoose.connect(connStr);


module.exports = mongoose.connection;
