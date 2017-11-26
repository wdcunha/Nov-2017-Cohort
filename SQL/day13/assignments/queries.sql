-- For the products table:
--
-- 1) Select the product whose stock has the most value (use sale price)
--
SELECT id, name, MAX(sale_price) AS sale
FROM products
GROUP BY id
ORDER BY sale DESC LIMIT 1;
--
-- 2) Select the most expensive product whose price is between 25 and 50
-- with remaining quantity
--
SELECT id, name, MAX(price) AS Expensive
FROM products
WHERE (price BETWEEN 25 AND 50)
GROUP BY id
ORDER BY Expensive DESC LIMIT 1;
--
-- 3) Select all products on sale with remaining quantity ordered by their
-- price and then their name
--
SELECT * FROM products
WHERE price > sale_price
AND remaining_quantity IS NOT NULL
AND remaining_quantity != 0
ORDER BY price, name;
--
-- 4) Select the second set 20 results based on the previous query
--
SELECT * FROM products
WHERE remaining_quantity IS NOT NULL
AND remaining_quantity != 0
ORDER BY price, name
LIMIT 10 OFFSET 20;
--
-- 5) Find the average price of all products
--
SELECT AVG(price) AS Avarage_Price FROM products;
--
-- 6) Find the average price of all products that are on sale
--
SELECT AVG(price) AS Avarage_Price FROM products
WHERE price > sale_price;
--
-- 7) Find the average price of all products that are on sale with
--    remaining quantity
--
SELECT AVG(price) AS Avarage_Price FROM products
WHERE price > sale_price
AND remaining_quantity IS NOT NULL
AND remaining_quantity != 0;
--
-- 8) Update all the products whose name contains `paper` (case
--    insensitive) to have a remaining quantity of 0
--
UPDATE products
SET remaining_quantity = 0
WHERE name ILIKE '%paper%';
--
-- 9) Is it possible to revert the query in question 8?
--
No, just recovering the backup
--
-- 10) Update all the products whose name contains `paper` or `steel` to
--     have a remaining quantity of a random number between 5 and 25
--
UPDATE products
SET remaining_quantity = FLOOR(RANDOM()*(25-5+1))+5
WHERE name ILIKE '%paper%'
OR name ILIKE '%steel%';
--
-- 11) Select the second set of 10 cheapest products with remaining
--     quantity
--
SELECT * FROM products
WHERE remaining_quantity IS NOT NULL
AND remaining_quantity != 0
LIMIT 10 OFFSET 10;
--
-- 12) Build a query that groups the products by their sale price and
--    show the number of products in that price and the sum of remaining
--    quantity. Label the count `product_count`



------
SELECT id, name, sale_price, COUNT(*) AS product_count,
SUM(remaining_quantity)
FROM products
WHERE remaining_quantity IS NOT NULL
AND remaining_quantity != 0
GROUP BY id
ORDER BY name;
-- 13) [stretch] Update the most expensive product to have double its
--     quantity in a single query
UPDATE products
SET remaining_quantity = remaining_quantity * 2
WHERE price IN (SELECT MAX(price) FROM products);

-----
SELECT * FROM products
WHERE price IN (SELECT MAX(price) FROM products);







-- BUMP
