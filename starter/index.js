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
            addMenu();
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Intern\'s name: ',
                name: 'internsName'
            },
            {
                type: 'input',
                message: 'What is the Intern\'s ID: ',
                name: 'internsId'
            },
            {
                type: 'input',
                message: 'What is the Intern\'s email address: ',
                name: 'internsEmail'
            },
            {
                type: 'input',
                message: 'What School does the Intern go to: ',
                name: 'internsSchool'
            }
        ])
        .then((internAnswers) => {
            buildTeam(internAnswers);
            addMenu();
        })
}

function buildTeam(infoArray) {
    const completeTeam = [...completeTeam, ...infoArray];
}

