require('dotenv').config();
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web.js');
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';

configViewEngine(app);
app.use('/', webRoutes);



app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})