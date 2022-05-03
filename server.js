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

    
}