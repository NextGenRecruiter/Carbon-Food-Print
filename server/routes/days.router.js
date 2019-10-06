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
        "day": "M",
        "emissions": "1.6800",
        "miles": "6",
        "heating": "0.3",
        "water": "146",
        "showers": "2"
    },
    {
        "day": "Tu",
        "emissions": "6.4400",
        "miles": "17",
        "heating": "1.0",
        "water": "1250",
        "showers": "19"
    },
    {
        "day": "W",
        "emissions": "1.3700",
        "miles": "4",
        "heating": "0.3",
        "water": "270",
        "showers": "4"
    },
    {
        "day": "Th",
        "emissions": "0.5900",
        "miles": "1",
        "heating": "0.1",
        "water": "45",
        "showers": "0"
    },
    {
        "day": "F",
        "emissions": "1.1400",
        "miles": "3",
        "heating": "0.2",
        "water": "307",
        "showers": "5"
    },
    {
        "day": "Sa",
        "emissions": "9.4200",
        "miles": "24",
        "heating": "1.5",
        "water": "2533",
        "showers": "38"
    },
    {
        "day": "Su",
        "emissions": "8.3100",
        "miles": "21",
        "heating": "1.3",
        "water": "2354",
        "showers": "36"
    }
]
router.get('/data', (req, res) => {
    res.send(dataExample)
});

module.exports = router;