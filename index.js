const path = require('path');
const http = require('http');
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
//const routes = require("./db/route")
const app = express();


// Set static folder (middleware)
app.use(express.static(path.join(__dirname, "frontend")));

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 30;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes(app)


app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})