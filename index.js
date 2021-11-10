const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const userQuestions = [{
    name: 'title',
    type: 'input',
    message: 'What is the title of the project?'
},
{
    name: 'description',
    type: 'input',
    message: 'What is the description of the project?'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err
        }
        console.log('file written')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(userQuestions).then(data => {
        console.log(data);
        const results = generateMarkdown(data)
        console.log(results)
        writeToFile('README.md', results)
    })

}

// Function call to initialize app
init();
 