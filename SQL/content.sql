USE employed_db;

INSERT INTO department (name)
VALUES 
    ("sales"),
    ("engineering"),
    ("finance"),
    ("legal")
;

INSERT INTO role (title, salary, department_id)
VALUES
    ("sales lead", 100000, 1),
    ("lead engineer", 150000, 2),
    ("software engineer", 120000, 2),
    ("accountant", 125000, 3),
    ("legal team leader", 250000, 4)
;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Bobby","Singh", 1,3),
    ("Michael", "Lee", 2, 1),
    ("Jesus", "Gonzalez", 3, null),
    ("Kelly", "Schmdit", 4, 2),
    ("Teddy", "White", 5, null),
    ("Sim", "Kim", 6, 3),
    ("Alicia", "Hobbs", 3, 7)
;