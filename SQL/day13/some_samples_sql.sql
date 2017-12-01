SELECT * FROM "student"
WHERE last_name = 'Parolin';
/*
INSERT INTO "student"
(first_name, last_name, age, email, phone_number)
VALUES
('Gustavo', 'Parolin', 42, 'gustavo@parolin.net', '+1 (236) 999-4123')*/

select * from students
SELECT id,first_name, last_name, email,phone_number FROM students where id >= 100;
SELECT * FROM students where registration_date > '2017-07-30';
SELECT * FROM students where registration_date > current_date - interval '100' day;
SELECT * FROM students where (id >= 100 AND id <= 200);
SELECT * FROM students where age >= 40;
SELECT * FROM students where registration_date is null;
SELECT * FROM students where age < 20 OR registration_date is null;
SELECT * FROM students where first_name ILIKE '%nn%' OR last_name ILIKE '%nn%';
SELECT * FROM students where age BETWEEN 25 AND 35;
SELECT * FROM students where first_name LIKE '%jo%';
SELECT * FROM students where first_name ILIKE '%jo%';
SELECT * FROM students where first_name ILIKE '%jo%' ORDER BY age, last_name DESC;
SELECT * FROM students where age > 30 ORDER BY first_name, last_name LIMIT 50;
SELECT * FROM students where age > 30 ORDER BY first_name, last_name LIMIT 50 OFFSET 100;
SELECT * FROM students where age > 25 LIMIT 50 OFFSET 20;
SELECT * FROM students where age > 25 LIMIT 20 OFFSET 20;
SELECT COUNT(*) FROM students where age > 25;
SELECT COUNT(*) as students_quantity FROM students where age > 25;
SELECT SUM(age) FROM students;
SELECT SUM(id) FROM students;
SELECT AVG(age) FROM students;
SELECT AVG(age) FROM students WHERE registration_date > '2017-01-01';
SELECT ROUND(AVG(age)) FROM students WHERE registration_date > '2017-01-01';
SELECT MIN(age) FROM students WHERE registration_date > '2017-01-01';
SELECT MAX(age) FROM students WHERE registration_date > '2017-01-01';
SELECT MAX(age) FROM students WHERE first_name ILIKE 'J%';
-- **** Group by
SELECT first_name, COUNT(first_name) FROM students;
SELECT first_name, COUNT(first_name) FROM students GROUP BY first_name ORDER BY count DESC;
SELECT age, COUNT(age) FROM students GROUP BY age ORDER BY count DESC;
UPDATE students
set registration_date='2017-11-6 12:12:02'
where registration_date is null;
--	SELECT * FROM students where registration_date is null;
