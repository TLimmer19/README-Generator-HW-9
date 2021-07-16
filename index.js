const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


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
        message: 'What can you do with your project?',
        name: 'use',
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: [
            'none',
            'apache License 2.0',
            'GNU General Public License V3.0',
            'MIT License',
            'BSD 3-Clause'
        ]
    },
    {
        type: 'input',
        message: 'What are the contribution guidlines?',
        name: 'help',
    },
    {
        type: 'input',
        message: 'Please state test instructions?',
        name: 'help',
    },
    {
        type: 'input',
        message: 'Enter your github username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'Email',
    }
];

//inquirer to generate questions
inquirer.prompt(
        [{

        }]
    )
    // creates README file
function writeToFile(filename, data) {
    fs.writeFile('${fileName}.md', generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success'));
}

function init() {
    inquirer.prompt(questions)
        .then((response) =>
            writeToFile("README", response), );
}

init();