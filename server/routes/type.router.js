const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

let typeExample = [
    {
        "id": 4,
        "food_item": "Beans",
        "amount_per_day": "150g",
        "emissions_per_year_kg": 36,
        "emissions_per_day_kg": "0.1000",
        "driven_miles": 0,
        "heating_days": "0.0",
        "water_liters": 24,
        "showers": 0,
        "food_type": "Protein",
        "img": "beans-svgrepo-com (1).svg"
    },
    {
        "id": 9,
        "food_item": "Cheese",
        "amount_per_day": "30g (enough to cover 2 crackers)",
        "emissions_per_year_kg": 352,
        "emissions_per_day_kg": "0.9600",
        "driven_miles": 2,
        "heating_days": "0.2",
        "water_liters": 227,
        "showers": 3,
        "food_type": "Protein",
        "img": "cheese-wedge-svgrepo-com.svg"
    },
    {
        "id": 10,
        "food_item": "Chicken",
        "amount_per_day": "75",
        "emissions_per_year_kg": 297,
        "emissions_per_day_kg": "0.8100",
        "driven_miles": 3,
        "heating_days": "0.2",
        "water_liters": 91,
        "showers": 1,
        "food_type": "Protein",
        "img": "chicken-leg-svgrepo-com.svg"
    },
    {
        "id": 15,
        "food_item": "Eggs",
        "amount_per_day": "2 eggs",
        "emissions_per_year_kg": 202,
        "emissions_per_day_kg": "0.5500",
        "driven_miles": 1,
        "heating_days": "0.1",
        "water_liters": 69,
        "showers": 1,
        "food_type": "Protein",
        "img": "eggs-svgrepo-com.svg"
    },
    {
        "id": 16,
        "food_item": "Fish (farmed)",
        "amount_per_day": "140g",
        "emissions_per_year_kg": 683,
        "emissions_per_day_kg": "1.8700",
        "driven_miles": 5,
        "heating_days": "0.3",
        "water_liters": 507,
        "showers": 8,
        "food_type": "Protein",
        "img": "fish-svgrepo-com.svg"
    },
    {
        "id": 17,
        "food_item": "Lamb",
        "amount_per_day": "75g",
        "emissions_per_year_kg": 1582,
        "emissions_per_day_kg": "4.3300",
        "driven_miles": 11,
        "heating_days": "0.7",
        "water_liters": 1100,
        "showers": 17,
        "food_type": "Protein",
        "img": "lamb-svgrepo-com.svg"
    },
    {
        "id": 23,
        "food_item": "Nuts",
        "amount_per_day": "1 handful",
        "emissions_per_year_kg": 5,
        "emissions_per_day_kg": "0.0100",
        "driven_miles": 0,
        "heating_days": "0.0",
        "water_liters": 133,
        "showers": 2,
        "food_type": "Protein",
        "img": "hazelnuts-almonds-svgrepo-com.svg"
    },
    {
        "id": 27,
        "food_item": "Pork",
        "amount_per_day": "75g",
        "emissions_per_year_kg": 656,
        "emissions_per_day_kg": "1.8000",
        "driven_miles": 5,
        "heating_days": "0.3",
        "water_liters": 262,
        "showers": 4,
        "food_type": "Protein",
        "img": "pork-ham-silhouette-svgrepo-com.svg"
    },
    {
        "id": 29,
        "food_item": "Prawns(farmed)",
        "amount_per_day": "5 large",
        "emissions_per_year_kg": 1256,
        "emissions_per_day_kg": "3.4400",
        "driven_miles": 9,
        "heating_days": "0.6",
        "water_liters": 451,
        "showers": 7,
        "food_type": "Protein",
        "img": "prawn-svgrepo-com.svg"
    }
]
// hit get('/type')
// get similar foods for comparison
router.get('/', (req, res) => {
    res.send(typeExample)
});


module.exports = router;