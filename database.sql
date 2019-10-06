----------------TABLE NAME-------------------
--"carbon_footprint"

----------------CREATE TABLES----------------

CREATE TABLE "days" (
"id" serial primary key,
"day" DATE,
"food" VARCHAR(18) NOT NULL
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
"food_type" VARCHAR(12) NOT NULL,
img VARCHAR(35)
);
DROP TABLE "days";
-----------------QUERIES--------------------

--select the total emission for each day
SELECT 
	"days".day, 
	sum("foods".emissions_per_day_kg) AS "emissions", 
	sum("foods".driven_miles) AS "miles", 
	sum("foods".heating_days) AS "heating",
	sum("foods".water_liters) AS "water",
	sum("foods".showers) AS "showers"
FROM "foods" 
JOIN "days" ON "foods".food_item = "days".food 
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
("day","food") 
VALUES ('2019-10-05', 'Avocado');

DELETE FROM "days"
WHERE "food"='Eggs';

SELECT "day", array_agg("food") AS "foods"
FROM "days"
WHERE "day" = '2019-10-08'
GROUP BY "day";



-----------------INSERTS--------------

INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Apple','1',12,0.03,0.09,0.01,14.37,0.22,'Fruit/veggie','apple-with-leaf-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Avocado','1/2 an avocado',72,0.2,0.5,0.03,44.99,0.69,'Fruit/veggie','avocado-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Banana','1',25,0.07,0.18,0.01,9.13,0.14,'Fruit/veggie','banana-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Beans','150g',36,0.1,0.25,0.01,24.35,0.37,'Protein','beans-svgrepo-com (1).svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Beef','75g',2820,7.73,19.72,1.22,2271.25,34.94,'Protein','beef-steak-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Beer','1 pint',243,0.67,1.7,0.1,9.68,0.15,'Beverage','beer-jar-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Berries and grapes','1 handful',44,0.12,0.31,0.02,33.48,0.52,'Fruit/veggie','blueberries-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Bread','1 slice',21,0.06,0.15,0.01,24.64,0.38,'Starch','loaf-of-bread-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Cheese','30g (enough to cover 2 crackers)',352,0.96,2.46,0.15,226.58,3.48,'Protein','cheese-wedge-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Chicken','75',297,0.81,3.48,0.22,91.22,1.4,'Protein','chicken-leg-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Chocolate (dark)','1 bar',541,1.48,3.78,0.23,24.77,0.38,'Chocolate','chocolate-svgrepo-com (1).svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Chocolate (milk)','1 bar',375,1.03,2.62,0.16,72.44,1.11,'Chocolate','chocolate-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Citrus fruit','1',11,0.03,0.08,0,9.62,0.15,'Fruit/veggie','citrus-fruits-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Coffee','1 cup',155,0.42,1.09,0.07,105.38,1.62,'Beverage','coffee-cup-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Eggs','2 eggs',202,0.55,1.42,0.09,68.79,1.06,'Protein','eggs-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Fish (farmed)','140g',683,1.87,4.78,0.3,506.88,7.8,'Protein','fish-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Lamb','75g',1582,4.33,11.06,0.69,1100.27,16.93,'Protein','lamb-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Almond Milk','200ml',51,0.14,0.36,0.02,74.09,1.14,'Beverage','milk-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Cow Milk','200ml',229,0.63,1.6,0.1,125.3,1.93,'Beverage','milk-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Oat Milk','200ml',65,0.18,0.46,0.03,9.62,0.15,'Beverage','milk-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Rice Milk','200ml',86,0.24,0.6,0.04,53.81,0.83,'Beverage','milk-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Soy Milk','200ml',71,0.19,0.5,0.03,37.69,0.58,'Beverage','milk-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Nuts','1 handful',5,0.01,0.04,0,133.3,2.05,'Protein','hazelnuts-almonds-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Oatmeal','3 Tbsp uncooked',38,0.1,0.27,0.02,20.56,0.32,'Starch','oatmeal-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Pasta','75g',43,0.12,0.31,0.02,57.52,0.88,'Starch','pasta-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Peas','80g',6,0.02,0.04,0,4.38,0.07,'Fruit/veggie','peas-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Pork','75g',656,1.8,4.59,0.28,262.35,4.04,'Protein','pork-ham-silhouette-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Potatoes','2 small',16,0.04,0.12,0.01,6.33,0.1,'Fruit/veggie','potatoes-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Prawns(farmed)','5 large',1256,3.44,8.78,0.55,450.54,6.93,'Protein','prawn-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Rice','3 Tbsp uncooked',121,0.33,0.85,0.05,168.17,2.59,'Starch','rice-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Tea','1 cup',15,0.04,0.11,0.01,5.11,0.08,'Beverage','tea-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Tofu','100g',58,0.16,0.41,0.02,7.5,0.12,'Proten','tofu-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Tomatoes','1',60,0.16,0.42,0.02,29.5,0.45,'Fruit/veggie','tomato-svgrepo-com.svg');
INSERT INTO foods("food_item","amount_per_day","emissions_per_year_kg","emissions_per_day_kg","driven_miles","heating_days","water_liters","showers","food_type","img") VALUES ('Wine','Medium Glass',114,0.31,0.8,0.05,13.77,0.21,'Beverage','wine-glass-svgrepo-com.svg');
