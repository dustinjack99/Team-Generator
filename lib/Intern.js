const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getSchool() {
        return inquirer.prompt({
            message: "What is your school?",
            name: 'school'
        });
    }
   
}

module.exports = Intern;