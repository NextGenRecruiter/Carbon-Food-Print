const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// hit get('/days/date')
// get all food items from a particular day
router.get('/foods/:date', (req, res) => {
    const queryText = `SELECT "day", array_agg("food") AS "foods"
                        FROM "days" WHERE "day"=$1 GROUP BY "day";`;
    pool.query(queryText, [req.params.date])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});

// hit get('/days')
// get the sum of emissions for each day
router.get('/totals/:date', (req, res) => {
    const queryText = `SELECT 
                            "days".day, 
                            sum("foods".emissions_per_day_kg) AS "emissions", 
                            sum("foods".driven_miles) AS "miles", 
                            sum("foods".heating_days) AS "heating",
                            sum("foods".water_liters) AS "water",
                            sum("foods".showers) AS "showers"
                        FROM "foods" 
                        JOIN "days" ON "foods".food_item = "days".food 
                        WHERE "days".day = $1
                        GROUP BY "days".day;`;
    pool.query(queryText, [req.params.date])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});

module.exports = router;