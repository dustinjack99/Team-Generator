const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

class Employee {

    constructor() {
     
    }

    getName() {
        return inquirer.prompt({
            message: "What is your name?",
            name: 'name'
        });
    }

    getId() {
        return inquirer.prompt({
            type: "list",
            message: "Choose your job:",
            name: 'id',
            choices: ["Manager", "Engineer", "Intern"]
        });

    }

    getEmail() {
        return inquirer.prompt({
            message: "What is your email?",
            name: 'email'
        });
    }
}

module.exports = Employee; 