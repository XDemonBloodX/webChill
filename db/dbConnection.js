const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const url = "mongodb://localhost:27017/COBRA";
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = connect;