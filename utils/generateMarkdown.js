// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if ('${license}' == "MIT License") {
        return ""
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
    return `# ${responses.title}
  ## ${responses.name}
  ${renderLicenseBadge(responses.license)}

`;
}

module.exports = generateMarkdown;

const generateREADME = (answers) =>
    `# README-Generator
## ${answers.description}

## Badge 
* ${answers.badge}

## Table of Contents

**[Installation](#Installation)**  
**[Usage](#Usage)**  
**[License](#License)**  
**[Contributing](#Contributing)**  
**[Tests](#Tests)**  
**[Questions](#Questions)**  

## Installation

* ${answers.installation}

## Usage

* ${answers.usage}

## License

* ${answers.license}

## Contributing

* ${answers.contributing}

## Tests

* ${answers.tests}

## Questions

* ${answers.questions}

**[Back Up To Top](#README-Generator)**

`;