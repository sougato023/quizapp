const express = require("express");
const mongoose = require('mongoose')
const app = express();

app.use(express.json());
const routes = require("./routes/routes");

require('dotenv').config();




const port = process.env.PORT? process.env.PORT: 4000;

app.get("/", (req,res) => {
    res.send("Hello Quiz");
});

app.use(routes);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))

app.listen(port, () => {
    console.log(`The API is running.... at http://localhost:${port}`);
});