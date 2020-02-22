const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getOffice() {
        return inquirer.prompt({
            message: "What is your office number?",
            name: 'office'
        });
    } 
}

module.exports = Manager;