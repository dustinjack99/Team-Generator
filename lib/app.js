const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Employee = require('./Employee');
// const Engineer = require('./Engineer');
// const Manager = require('./Manager');
// const Intern = require('./Intern');

async function init () {
    try {
        const newEmployee = new Employee();
        const name = await newEmployee.getName();
        const id = await newEmployee.getId();
        const email = await newEmployee.getEmail();
        
        console.log(name, id, email)

       
        
        // if (answers.job == "Manager") {
        //     const newManager = new Manager();
        // }
      
    } catch (err) {
        console.log(err);
    }
}

init();


// console.log(newEmployee);

