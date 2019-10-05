const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// hit get('/days/list')
// get all food items from a particular day
// router.get('/list', (req, res) => {
//     const queryText = `SELECT * FROM "foods" WHERE "food_item"=$1;`;
//     pool.query(queryText, [req.params.name])
//         .then((result) => { res.send(result.rows); })
//         .catch((err) => {
//             console.log('Error completing SELECT movie query', err);
//             res.sendStatus(500);
//         });
// });

// hit get('/days/sum')
// get the sum of emissions for each day
router.get('/sum', (req, res) => {
    const queryText = `SELECT "days".day, sum("foods".emissions_per_day_kg) FROM "foods" 
                        JOIN "days" ON "foods".food_item = "days".food GROUP BY "days".day;`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});

module.exports = router;