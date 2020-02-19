const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor() {
        super();
    }
    
    getGithub() {
        return inquirer.prompt({
            message: "What is your GitHub username?",
            name: "github"
        });
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;