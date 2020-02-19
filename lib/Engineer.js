const Employee = require('./Employee');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor() {

    }
    
    getGithub() {

    }
    getRole() {
        //return Engineer
    }
}

module.exports = Engineer;