const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

//Route includes
const carbonFoodPrint = require('')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for react requests
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('', carbonFoodPrint)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});