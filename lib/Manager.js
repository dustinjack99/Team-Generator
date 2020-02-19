const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor() {
        super();
    }

    getNumber() {
        return inquirer.prompt({
            message: "What is your office number?",
            name: 'office'
        });

    }
    
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;