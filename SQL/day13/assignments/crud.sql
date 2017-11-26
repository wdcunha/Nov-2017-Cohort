/*
1)  Create a student record with the following attributes: first_name: John, last_name: Smith, Age: 45,
    email: john@smith.com registration_date: January 1st 2016, phone_number: 778.778.7787   */
INSERT INTO "students"
(first_name, last_name, age, email, phone_number, registration_date)
VALUES
('John', 'Smith', 45, 'john@smith.com', '+1(778)778-7787', '2016-01-01');

--2)  Select that student from the database be fetching the last record
SELECT * FROM "students" ORDER BY id DESC LIMIT 1

--3) Using the id you fetched from the previous exercise, update the age of that record to become 50
UPDATE students SET age = 50 where id = 690;

--4) Delete that record using its id
DELETE FROM "students" where id = 690;
