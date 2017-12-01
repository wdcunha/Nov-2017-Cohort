SELECT first_name, COUNT(*) AS frequency
FROM students
GROUP BY first_name
ORDER BY frequency DESC, first_name;

SELECT * FROM students
INNER JOIN projects ON students.id = projects.student_id
ORDER BY students.id DESC;

SELECT s.id,s.first_name, COUNT(p.student_id) AS projects_created
FROM students s
INNER JOIN projects p ON s.id = p.student_id
GROUP BY s.id, s.first_name
ORDER BY projects_created ASC, s.first_name;

-- \\\\\\\\\\\\\\\\\\\ Tam's solution
SELECT s.id, first_name, COUNT(*) AS projects_created
FROM students s
INNER JOIN projects p ON s.id = p.student_id
GROUP BY s.id
ORDER BY count(*) ASC;
-- Gustavo observed that it isn't in ANSI pattern like this


SELECT * FROM students
INNER JOIN enrolments ON students.id = enrolments.student_id
INNER JOIN courses ON enrolments.course_id = courses.id;

SELECT * FROM students
INNER JOIN enrolments ON students.id = enrolments.student_id
INNER JOIN courses ON enrolments.course_id = courses.id
WHERE courses.title = 'Up-sized hybrid project';

SELECT * FROM students
LEFT JOIN projects ON students.id = projects.student_id;

SELECT * FROM students
LEFT JOIN projects ON students.id = projects.student_id
WHERE projects.id IS NOT NULL;


SELECT C.id, c.title, AVG(e.score) FROM enrolments e
LEFT JOIN courses c ON c.id = e.course_id
GROUP BY c.id
ORDER BY c.title;


SELECT c.id, title, COUNT(e.student_id)
FROM courses c
LEFT JOIN enrolments e ON e.course_id = c.id
GROUP BY c.id
ORDER BY count DESC;

-- using % will cause a line by line search, which will be to slow
-- to gain in performance, use indexed searchs








-- BUMP
