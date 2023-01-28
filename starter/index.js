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

// TODO: Write Code to gather information about the development team members, and render the HTML file.

function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the Team Manager\'s name: ',
                name: 'managersName'
            },
            {
                type: 'input',
                message: 'Please enter the Manager\'s ID: ',
                name: 'managersId'
            },
            {
                type: 'input',
                message: 'Please enter the Manager\'s email address: ',
                name: 'managersEmail'
            },
            {
                type: 'input',
                message: 'Please enter the Manager\'s Office number: ',
                name: 'managersOfficeNo'
            }
        ])
        .then((managerAnswers) => {
            buildTeam(managerAnswers);
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
                    finished();
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
                name: 'engineersName'
            },
            {
                type: 'input',
                message: 'What is the engineer\'s ID: ',
                name: 'engineersId'
            },
            {
                type: 'input',
                message: 'What is the engineer\'s email address: ',
                name: 'engineersEmail'
            },
            {
                type: 'input',
                message: 'What is the engineer\'s GitHub username: ',
                name: 'engineersGithub'
            }
        ])
        .then((engineerAnswers) => {
            buildTeam(engineerAnswers);
        })
}



// When a user selects the engineer option then a user is prompted to enter the following and then the user is taken back to the menu:
// Engineer's Name
// ID
// Email
// GitHub username
// When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
// Intern’s name
// ID
// Email
// School
// When a user decides to finish building their team then they exit the application, and the HTML is generated.


function buildTeam(infoArray) {
    const completeTeam = [...completeTeam, ...infoArray];
}