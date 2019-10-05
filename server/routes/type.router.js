const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// hit get('/type')
// get similar foods for comparison
router.get('/', (req, res) => {
    let food = {
        type: 'Protein',
        name: 'Eggs'
    }
    const queryText = `SELECT * FROM "foods" WHERE "food_type"=$1 AND "food_item"<>$2;`;
    pool.query(queryText, [food.type, food.name])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});


module.exports = router;