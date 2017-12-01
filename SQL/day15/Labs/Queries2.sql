-- 1) Calculate how many items in stock we've ever had for products
-- (remaining or sold) in the database.
SELECT SUM(remaining_quantity) +(SELECT SUM(quantity)
FROM line_items) as total
FROM products;

-- 2) Find the average order total price for all the orders in the
-- system
SELECT AVG(price*quantity)
FROM line_items l
LEFT JOIN orders o ON l.order_id = o.id








--
