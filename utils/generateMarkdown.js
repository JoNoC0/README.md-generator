// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return  ''
  } else { 
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return ''
  } else {
    return '* [License](#license)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ''
  } else {
    return `## License
${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage Information](#usage)
* [Contribution](#contribution)
* [Testing Instructions](#testing)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Installation Instructions
${data.instructions}
## Usage Information
${data.usage}
## Contribution
${data.contribution}
## Testing Instructions
${data.testInstructions}
${renderLicenseSection(data.license)}
## Contact
The repos is at ${data.repo} and username is ${data.username}
Contact me at ${data.email}
`;
}

module.exports = generateMarkdown;
