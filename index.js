// WHEN I enter a description, 
// installation instructions
// usage information
// contribution guidelines
// test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// internal modules
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const userQuestions = [{
    name: 'username',
    type: 'input',
    message: 'What is your GitHub username?(No @ needed)',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log('A valid GitHub username is required!');
        }
        return true;
    }
},
{
    name: 'email',
    type: 'input',
    message: 'What is your email?',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log('Email is required!');
        }
        return true;
    }
},
{
    name: 'repo',
    type: 'input',
    message: 'What is the name of your GitHub repo?',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log('A valid GitHub repo is required!')
        }
        return true;
    }

},
{
    name: 'title',
    type: 'input',
    message: 'What is the title of the project?(Required)'
},
{
    name: 'description',
    type: 'input',
    message: 'What is the description of the project?(Required)'
},
{
    name: 'instructions',
    type: 'input',
    message: 'What is the installation instructions?'
},
{
    name: 'usage',
    type: 'input',
    message: 'How to use the project?'
},
{
    name: 'contribution',
    type: 'input',
    message: 'Were there contributors to the project? If so, describe contribution(s) made.'
},
{
    name: 'testInstructions',
    type: 'input',
    message: 'What is the instructions for testing?'
},
{
    name: 'license',
    type: 'list',
    message: 'What license was used?',
    choices: ['MIT', 'GPL_3.0', 'none']
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
 