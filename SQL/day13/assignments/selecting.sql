-- 1)Select the first 10 students whose ages are between 35 and 45.
SELECT * FROM students WHERE (age BETWEEN 35 AND 45) ORDER BY age ASC LIMIT 10;

--2) Select the third set of 10 students whose ages are more than 25 and whose first names contain `th`.
-- The students must be ordered by their id then first name in a descending order.
SELECT * FROM students
WHERE (age > 25) AND first_name ILIKE '%a%'
ORDER BY first_name DESC, id DESC LIMIT 10 OFFSET 20;


--3) Select the 10 oldest students (You should ignore students with an age that is `NULL`).
SELECT * FROM students WHERE age IS NOT NULL ORDER BY age DESC LIMIT 10;

--4) Select all students with age 45 whose last names contain the letter n.
SELECT * FROM students WHERE age = 45 AND last_name I LIKE '%n%';

--5) From the products table:
--a)Select all the products that are on sale.
SELECT * FROM products
WHERE remaining_quantity != 0
AND remaining_quantity IS NOT NULL;

-- b) Select all the products that are on sale and have remaining items in stock ordered by the sale price in
-- ascending order.
SELECT * FROM products
WHERE remaining_quantity != 0
AND remaining_quantity IS NOT NULL
ORDER BY remaining_quantity ASC;


-- c) Select all the products priced between 25 and 50 (regular price) and that are on sale.
SELECT * FROM products
WHERE remaining_quantity != 0
AND remaining_quantity IS NOT NULL
AND sale_price BETWEEN 25 AND 50;
