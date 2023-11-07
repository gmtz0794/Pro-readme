// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process, if any:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Explain how others can contribute to this project:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
