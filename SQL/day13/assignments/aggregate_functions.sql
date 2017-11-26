-- From the students table:
--
-- 1) Find the number of students named 'Milton'.
SELECT * FROM students WHERE first_name = 'Milton';
--
-- List the `first_name`s that occur more than once in students, with the number occurrences of that name.
SELECT first_name, COUNT(*) AS C FROM students
GROUP BY first_name
HAVING COUNT(*) > 1;

--
-- Refine the above query to list the 20 most common first_names among students, in order first of how common they
-- are, and alphabetically when names have the same count.
SELECT first_name, COUNT(*) AS C FROM students
GROUP BY first_name
HAVING COUNT(*) > 1
ORDER BY C DESC, first_name;

-- From the products table:
--
-- Find the most expensive product.
--
SELECT id,name, MAX(price) AS p
FROM products
GROUP BY id
ORDER BY p DESC LIMIT 1;

--
-- Find the cheapest product that is on sale.
--
SELECT id, name, MIN(price) AS p
FROM products
WHERE price > sale_price
AND remaining_quantity IS NOT NULL
AND remaining_quantity != 0
GROUP BY id
ORDER BY p ASC LIMIT 1;

--
-- Find the total value of all inventory in stock (use sale price).
--
SELECT SUM(sale_price*remaining_quantity) AS Total FROM products;




-- BUMP --
