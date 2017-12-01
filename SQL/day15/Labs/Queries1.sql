-- 1) Find the average line_item total price (meaning quantity * price)
--    for each order that were completed in January 2016 month.

SELECT l.order_id, AVG(l.price*l.quantity)
FROM line_items l
LEFT JOIN orders o ON l.order_id = o.id
WHERE completed_on BETWEEN '2016-01-01' AND '2016-01-31'--o.id = 1
GROUP BY l.order_id
--ORDER BY AVG;


-- 2) Select product titles, product prices and the lowest price they
--    were sold at during the last month.
SELECT p.id, p.name, p.price, MIN(l.price)
FROM line_items l
LEFT JOIN products p ON l.product_id = p.id
INNER JOIN orders o ON o.id = l.order_id
WHERE o.completed_on > (SELECT MAX(completed_on) FROM orders) - interval '1 month'
--o.completed_on > --(current_date - interval '1 month')
GROUP BY p.id
ORDER BY MIN;






--
