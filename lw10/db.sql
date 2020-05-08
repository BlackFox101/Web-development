CREATE DATABASE studydb;

USE studydb;

CREATE TABLE Faculty
(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL
);

CREATE TABLE Groups
(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    FacultyId INT NOT NULL,
    FOREIGN KEY (FacultyId) REFERENCES Faculty(Id)
);

CREATE TABLE Students
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    Age INT NOT NULL,
    GroupId INT NOT NULL,
    FOREIGN KEY(GroupId) REFERENCES Groups(Id)
);

INSERT Faculty(Name)
VALUES
    ('FIVT'),
    ('RTF'),
    ('ILP');
SELECT * FROM Faculty;

INSERT Groups(Name, FacultyId)
VALUES
    ('PS', 1),
    ('IVT', 1),
    ('IS', 1),
    ('RTF-group1', 2),
    ('RTF-group2', 2),
    ('RTF-group3', 2),
    ('ILP-group1', 3),
    ('ILP-group2', 3),
    ('ILP-group3', 3);
SELECT * FROM Groups;

INSERT Students(Name, Age, GroupId)
VALUES
    ('IVAN', 19, 1),
    ('ALEXEI', 20, 1),
    ('DIMA', 20, 1),
    ('KOSTYA', 18, 1),
    ('MAKS', 21, 1),

    ('STEPA', 19, 2),
    ('MARK', 20, 2),
    ('SHORA', 20, 2),
    ('NIKA', 18, 2),
    ('DASHA', 21, 2),

    ('DIMA', 19, 3),
    ('ALEXEI', 20, 3),
    ('DIMA', 20, 3),
    ('KATYA', 18, 3),
    ('MAKS', 21, 3),

    ('IVAN', 19, 4),
    ('ALEXEI', 20, 4),
    ('DIMA', 20, 4),
    ('KOSTYA', 18, 4),
    ('MAKS', 21, 4),

    ('IVAN', 19, 5),
    ('ALEXEI', 20, 5),
    ('DIMA', 20, 5),
    ('KOSTYA', 18, 5),
    ('MAKS', 21, 5),

    ('IVAN', 19, 6),
    ('ALEXEI', 20, 6),
    ('DIMA', 20, 6),
    ('KOSTYA', 18, 6),
    ('MAKS', 21, 6),

    ('IVAN', 19, 7),
    ('ALEXEI', 20, 7),
    ('DIMA', 20, 7),
    ('KOSTYA', 18, 7),
    ('MAKS', 21, 7),

    ('IVAN', 19, 8),
    ('ALEXEI', 20, 8),
    ('DIMA', 20, 8),
    ('KOSTYA', 18, 8),
    ('MAKS', 21, 8),

    ('IVAN', 19, 9),
    ('ALEXEI', 20, 9),
    ('DIMA', 20, 9),
    ('KOSTYA', 18, 9),
    ('MAKS', 21, 9);
SELECT * FROM Students;

SELECT *
FROM
    Students
WHERE
    AGE = 19;

SELECT
    Students.Name AS "Name",
    Students.Age AS "Age"
FROM
    Students JOIN Groups ON Students.GroupId = Groups.Id
WHERE
    Groups.Name = 'PS';

SELECT
    Students.Name AS "Name",
    Students.Age AS "Age",
    Groups.Name AS "Group"
FROM
    Students JOIN Groups ON Students.GroupId = Groups.Id
             JOIN Faculty ON Groups.FacultyId = Faculty.Id
WHERE
    Faculty.Name = 'FIVT';

SELECT
    Students.Name AS "Name",
    Faculty.Name AS "Faculty",
    Groups.Name AS "Group"
FROM
    Students JOIN Groups ON Students.GroupId = Groups.Id
             JOIN Faculty ON Groups.FacultyId = Faculty.Id
WHERE
    Students.Id = 1;
