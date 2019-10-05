----------------TABLE NAME-------------------
--"carbon_footprint"

----------------CREATE TABLES----------------

CREATE TABLE "days" (
"id" serial primary key,
"day" DATE,
"food_id" INT REFERENCES "foods"
);

CREATE TABLE "foods"(
"id" serial primary key,
"food_item" VARCHAR(18) NOT NULL,
"amount_per_day" VARCHAR(32) NOT NULL,
"emissions_per_year_kg" INTEGER  NOT NULL,
"emissions_per_day_kg" NUMERIC(6,4) NOT NULL,
"driven_miles" INTEGER  NOT NULL,
"heating_days" NUMERIC(4,1) NOT NULL,
"water_liters" INTEGER,
"showers" INTEGER,
"food_type" VARCHAR(12) NOT NULL
);
DROP TABLE "days";
-----------------QUERIES--------------------

--select the total emission for each day
SELECT "days".day, sum("foods".emissions_per_day_kg) 
FROM "foods" 
JOIN "days" ON "foods".id = "days".food_id 
GROUP BY "days".day;

--select similar foods
--example: all proteins that are not eggs
SELECT * FROM "foods" 
WHERE "food_type"='Protein' AND
"food_item" <>'Eggs';

--select all metrics for one food
-- example: eggs
SELECT * FROM "foods" 
WHERE "food_item"='Eggs';

INSERT INTO "days" 
("day","food_id") 
VALUES ('2019-10-07', 7);


-----------------INSERTS--------------

INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Apple','1',12,0.0329,0.0877,0.0055,14.3699,0.2192,'Fruit/veggie');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Avocado','0.5',72,0.1973,0.5041,0.0301,44.989,0.6904,'Fruit/veggie');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Banana','1',25,0.0685,0.1753,0.0082,9.1342,0.1397,'Fruit/veggie');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Beans','150g',36,0.0986,0.2548,0.0137,24.3507,0.3726,'Protein');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Beef','75g',2820,7.726,19.7151,1.2247,NULL,NULL,'Protein');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Beer','1 pint',243,0.6658,1.7041,0.1041,9.6849,0.1479,'Beverage');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Berries and grapes','1 handful',44,0.1205,0.3123,0.0192,33.4767,NULL,'Fruit/veggie');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Bread','1 slice',21,0.0575,0.1534,0.0082,24.6438,0.3781,'Starch');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Cheese','30g (enough to cover 2 crackers)',352,0.9644,2.463,0.1507,226.5836,3.4849,'Protein');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Chicken','75',297,0.8137,3.4795,0.2164,1.4027,NULL,'Protein');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Chocolate (dark)','1 bar',541,1.4822,3.7836,0.2329,0.3808,NULL,'Chocolate');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Chocolate (milk)','1 bar',375,1.0274,2.6219,0.1616,1.1123,NULL,'Chocolate');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Citrus fruit','1',11,0.0301,0.0795,0.0049,NULL,NULL,'Fruit/veggie');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Coffee','1 cup',155,0.4247,1.0877,0.0658,NULL,NULL,'Beverage');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Eggs','2 eggs',202,0.5534,1.4192,0.0877,1.0575,NULL,'Protein');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Fish (farmed)','140g',683,1.8712,4.7753,0.2959,7.7973,NULL,'Protein');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Lamb','75g',1582,4.3342,11.0603,0.6877,NULL,NULL,'Protein');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Almond Milk','200ml',51,0.1397,0.3562,0.0219,1.1397,NULL,'Beverage');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Cow Milk','200ml',229,0.6274,1.6027,0.0986,1.926,NULL,'Beverage');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Oat Milk','200ml',65,0.1781,0.4603,0.0274,0.1479,NULL,'Beverage');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Rice Milk','200ml',86,0.2356,0.6,0.0356,0.8274,NULL,'Beverage');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Soy Milk','200ml',71,0.1945,0.4986,0.0301,NULL,NULL,'Beverage');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Nuts','1 handful',5,0.0137,0.0356,0.0022,2.0493,NULL,'Protein');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Oatmeal','3 Tbsp uncooked',38,0.1041,0.2685,0.0164,0.3151,NULL,'Starch');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Pasta','75g',43,0.1178,0.3068,0.0164,0.8822,NULL,'Starch');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Peas','80g',6,0.0164,0.0438,0.0027,NULL,NULL,'Fruit/veggie');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Pork','75g',656,1.7973,4.5863,0.2849,4.0356,NULL,'Protein');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Potatoes','2 small',16,0.0438,0.1178,0.0055,NULL,NULL,'Fruit/veggie');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Prawns(farmed)','5 large',1256,3.4411,8.7836,0.5452,6.9288,NULL,'Protein');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Rice','3 Tbsp uncooked',121,0.3315,0.8493,0.0521,2.5863,NULL,'Starch');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Tea','1 cup',15,0.0411,0.1068,0.0055,NULL,NULL,'Beverage');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Tofu','100g',58,0.1589,0.4082,0.0247,0.1151,NULL,'Proten');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Tomatoes','1',60,0.1644,0.4247,0.0247,0.4521,NULL,'Fruit/veggie');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type") VALUES ('Wine','Medium Glass',114,0.3123,0.7973,0.0493,0.211,NULL,'Beverage');