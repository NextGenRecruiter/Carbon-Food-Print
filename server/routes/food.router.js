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


module.exports = router;