require('dotenv').config();
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web.js');
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';
const connection = require('./config/database.js')
configViewEngine(app);
app.use('/', webRoutes);

//test connection


// connection.query(`SELECT * FROM Users`,
//   function (err, results, fields) {
//     console.log('result = ', results);
//     console.log('field = ', fields);
//   }
// )


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})