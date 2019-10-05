const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;


const daysRouter = require('./routes/days.router')
const foodRouter = require('./routes/food.router')
const typeRouter = require('./routes/type.router')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for react requests
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/days', daysRouter)
app.use('/food', foodRouter)
app.use('/type', typeRouter)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});