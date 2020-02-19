const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor() {
        super();
    }
    
    getSchool() {
        return inquirer.prompt({
            message: "What is your school?",
            name: 'school'
        });
    }
    getRole() {
        return "Intern"; 
    }
}

module.exports = Intern;