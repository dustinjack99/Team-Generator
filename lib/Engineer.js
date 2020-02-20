const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github) {
            super(name, id, email);
            this.github = github;
            this.name = name;
            this.id = id;
            this.email = email;
        }
    
    getGithub() {
        return inquirer.prompt({
            message: "What is your GitHub username?",
            name: "github"
        });
    }

}

module.exports = Engineer;