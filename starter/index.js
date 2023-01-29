const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { finished } = require("stream");

const team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the Team Manager\'s name: ',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Please enter the Manager\'s ID: ',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Please enter the Manager\'s email address: ',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Please enter the Manager\'s Office number: ',
                name: 'officeNo'
            }
        ])
        .then((managerAnswers) => {
            const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNo);
            team.push(manager);
            addMenu();
        })
} 

function addMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to: ',
                name: 'menuChoice',
                choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
            }
        ])
        .then((menuAnswer) => {
            switch (menuAnswer.menuChoice) {
                case 'Add an engineer' :
                    addEngineer();
                    break;
                case 'Add an intern' :
                    addIntern();
                    break;
                case 'Finish building the team' :
                    fs.writeFile(outputPath, render(team), (err) =>
                    err ? console.error(err) : console.log('Success!'));
                    break;
            }
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Engineer\'s name: ',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is the engineer\'s ID: ',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is the engineer\'s email address: ',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is the engineer\'s GitHub username: ',
                name: 'github'
            }
        ])
        .then((engineerAnswers) => {
            const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
            team.push(engineer);
            addMenu();
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Intern\'s name: ',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is the Intern\'s ID: ',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is the Intern\'s email address: ',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What School does the Intern go to: ',
                name: 'school'
            }
        ])
        .then((internAnswers) => {
            const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
            team.push(intern);
            addMenu();
        })
}

function init() {
    createManager();
}

init();