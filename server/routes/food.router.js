const express = require('express');
const router = express.Router();

// hit get('/food')
// get back your days and total emissions
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "foods";`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});


module.exports = router;