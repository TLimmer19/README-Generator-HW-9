const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('')


const questions = [{
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: "What is your project's description?",
        name: "description",
    },
    {
        type: 'input',
        message: 'How do you install your project',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What can you do with your project?'
    }
];

//inquirer to generate questions
inquirer.prompt(
    [{

    }]
)

function writeToFile(filename, data) {}

function init() {}

init();