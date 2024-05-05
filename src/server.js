const express = require('express')
const app = express()
require('dotenv').config();
const path = require('path');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';


//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//config static file
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.render('sample.ejs');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})