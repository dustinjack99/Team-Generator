const fs = require('fs');
const path = require('path');
const axios = require('axios');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

async function init() {
    try {
        const newEmployee = new Employee();
        const name = await newEmployee.getName();
        const id = await newEmployee.getId();
        const email = await newEmployee.getEmail();

        if (id.id === 'Manager') {
            const newManager = new Manager();
            const office = await newManager.getNumber();
            const role = await newManager.getRole();

            
            console.log(name);
            console.log(email);
            console.log(office);
            console.log(role);
           
        } else if (id.id === "Engineer") {
            const newEngineer = new Engineer();
            const gitHub = await newEngineer.getGithub();
            const role = await newEngineer.getRole();
            const { get } = await axios.get(`https://api.github.com/users/${gitHub.github}`)
            console.log(name);
            console.log(email);
            console.log(role);
            console.log(get);

        } else if (id.id === "Intern") {
            const newIntern = new Intern();
            const school = await newIntern.getSchool();
            const role = await newIntern.getRole();
            console.log(name);
            console.log(email);
            console.log(school)
            console.log(role)
            
        }

    } catch (err) {
        console.log(err);
    }
}



init();

