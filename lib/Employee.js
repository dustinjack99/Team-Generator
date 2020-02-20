const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getNumber() {
        return inquirer.prompt({
            message: "How many employees are on your team?",
            name: "number"
        });
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