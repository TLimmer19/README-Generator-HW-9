// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (`${license}` == "MIT License") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (`${license}` == "GNU General Public License V3.0") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (`${license}` == "apache License 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (`${license}` == "BSD 3-Clause") {
        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
    return `# ${responses.title}
  ## ${responses.name}
  ${renderLicenseBadge(responses.license)}

`;
}



const generateREADME = (answers) => {
    let badge = renderLicenseBadge(answers.license)

    return `# README-Generator - ${answers.title}
## ${answers.description}

## Badge 
* ${badge}

## Table of Contents

**[Installation](#Installation)**  
**[Usage](#Usage)**  
**[License](#License)**  
**[Contributing](#Contributing)**  
**[Tests](#Tests)**  
**[Questions](#Questions)**  

## Installation

* ${answers.install}

## Usage

* ${answers.use}

## License

* ${answers.license}

## Contributing

* ${answers.help}

## Tests

* ${answers.test}

## Github

* ${answers.github}

## Email

* ${answers.mail}


**[Back Up To Top](#README-Generator)**

`
};

module.exports = generateREADME;