

SELECT l.product_id
FROM orders o
LEFT JOIN line_items l ON l.order_id = o.id
WHERE o.completed_on > (current_date - interval '12 month')
--GROUP BY o.id
ORDER BY l.product_id;
