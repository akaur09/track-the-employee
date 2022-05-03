const mysql = require("mysql");
const inquirer =require("inquirer");
const table = require("console.table");

const connection = mysql.createConnection ({
    host: 'local host',
    port: '3001',
    user: 'root',
    password: 'Ak_9586!',
    database:'employed_db'
});

 connection.connect(function(err){
     if (err) throw err;
     console.log ("conected as id" + connection.threadId);
     console.log (`   
     ╔═══╗─────╔╗──────────────╔═╗╔═╗
     ║╔══╝─────║║──────────────║║╚╝║║
     ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
     ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
     ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
     ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
     ───────║║──────╔═╝║─────────────────────╔═╝║
     ───────╚╝──────╚══╝─────────────────────╚══╝`);
     firstPrompt();
 });

function firstPrompt() {
    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "what would you like to do?",
            choices: [
                "View Employees",
                "View Employees by Department",
                "Add Employee",
                "Remove Employees",
                "Update Employee Role",
                "Add Role",
                "End"
            ]
        })
    .then(function({ task }){
        switch (task){
            case "View Employees":
                viewEmployee();
                break;
            case "View Employees by Department":
                viewEmployeeByDepartment();
                break;
            case "Add Employee":
                viewAddEmployee();
                break;
            case "Remove Employees":
                viewRemoveEmployees();
                break;
            case "Update Employee Role":
                viewUpdateEmployeeRole();
                break;
            case "Add Role":
                viewAddRole();
                break;
            case "End":
                connection.end();
                break;
        }
    });    
}

function viewEmployee(){
    console.log("Viewing Employees");

    var query = `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN role r
         ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee m
        ON m.id = e.manager_id`
    
    connection.query(query, function (err,res){
        if (err) throw err;
        console.log(res);
        console.log("Employees checked");
        firstPrompt();
    });
}

