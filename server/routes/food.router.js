const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// hit get('/food/name')
// get single food item and metrics
router.get('/:name', (req, res) => {
    const queryText = `SELECT * FROM "foods" WHERE "food_item"=$1;`;
    pool.query(queryText, [req.params.name])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});
// hit post('/food') and send object with "day" and "food"
// add a food to your day
router.post('/', (req, res) => {
    const queryText = `INSERT INTO "days" ("day","food") VALUES ($1, $2);`;
    pool.query(queryText, [req.body.date, req.body.name])
        .then((result) => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});
// hit delete('/food/name')
// remove a food from your day
router.delete('/:name', (req, res) => {
    const queryText = `DELETE FROM "days" WHERE "food"=$1;`;
    pool.query(queryText, [req.params.name])
        .then((result) => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});

module.exports = router;