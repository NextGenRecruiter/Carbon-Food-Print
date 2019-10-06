const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

let foodsExample = [
    {
        "day": "2019-10-06T05:00:00.000Z",
        "foods": [
            "Bread",
            "Cheese",
            "Beer",
            "Beef"
        ]
    }
]
// hit get('/days/date')
// get all food items from a particular day
router.get('/foods', (req, res) => {
   res.send(foodsExample)
});

let totalsExample = [
    {
        "day": "2019-10-06T05:00:00.000Z",
        "emissions": "9.4200",
        "miles": "24",
        "heating": "1.5",
        "water": "2533",
        "showers": "38"
    }
]
// hit get('/days')
// get the sum of emissions for each day
router.get('/totals', (req, res) => {
    res.send(totalsExample)
});

let dataExample = [
    {
        "day": "2019-10-05T05:00:00.000Z",
        "emissions": "1.6800"
    },
    {
        "day": "2019-10-07T05:00:00.000Z",
        "emissions": "5.5100"
    },
    {
        "day": "2019-10-08T05:00:00.000Z",
        "emissions": "8.9000"
    },
    {
        "day": "2019-10-06T05:00:00.000Z",
        "emissions": "9.4200"
    }
]
router.get('/data', (req, res) => {
    res.send(dataExample)
});

module.exports = router;