const fs = require('fs');
const axios = require('axios');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

async function init() {
    try {
        
        const newEmployee = new Employee();
        const number = await newEmployee.getNumber();
        const openingTag =
            `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="../templates/assets/style.css">
        </head>
        <body>
        <h1>Team Generator</h1>
        <main>`;
        const closingTag = `
            </main>
            </body>
            </html>`

        fs.writeFile(`../output/main.html`, openingTag, (err) => {
            if (err) throw err;
        });

        for (i = 0; i < number.number; i++) {

            const newName = await newEmployee.getName();
            const newId = await newEmployee.getId();
            const newEmail = await newEmployee.getEmail();

            if (newId.id === 'Manager') {
                const newManager = new Manager();
                const office = await newManager.getOffice();
                let html = `
                <div class="employee">
                    <h3 class="title">${newId.id}</h3>
                    <h4>${newName.name}</h4>
                    <h5><a href='mailto:${newEmail.email}'>Email</a></h5>
                    <h5>${office.office}</h5>
                </div>
                `;

                fs.appendFile(`../output/main.html`, html, (err) => {
                    if (err) throw err;
                });

            } else if (newId.id === "Engineer") {
                const newEngineer = new Engineer();
                const gitHub = await newEngineer.getGithub();
                const get = await axios.get(`https://api.github.com/users/${gitHub.github}`);
                let html = `
                <div class="employee">
                    <h3 class="title">${newId.id}</h3>
                    <h4>${newName.name}</h4>
                    <h5><a href='mailto:${newEmail.email}'>Email</a></h5>
                    <h5><a target="_blank" href="${get.data.html_url}">GitHub Profile</a></h5>
                </div>
                `;

                fs.appendFile(`../output/main.html`, html, (err) => {
                    if (err) throw err;
                });

            } else if (newId.id === "Intern") {
                const newIntern = new Intern();
                const school = await newIntern.getSchool();
                let html = `
                <div class="employee">
                    <h3 class="title">${newId.id}</h3>
                    <h4>${newName.name}</h4>
                    <h5><a href='mailto:${newEmail.email}'>Email</a></h5>
                    <h5>${school.school}</h5>
                </div>
                `;

                fs.appendFile(`../output/main.html`, html, (err) => {
                    if (err) throw err;
                });
            }
        }

        fs.appendFile(`../output/main.html`, closingTag, (err) => {
            if (err) throw err;
        })

    } catch (err) {
        console.log(err);
    }
}

init();