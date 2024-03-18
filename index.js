const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const promptUser = () => {
    inquirer.prompt([
    {
        name: 'title',
        message: 'What is the title of the project?',
        type: 'input',
    },
    {
        name: 'description',
        message: 'Please write a short description of the project',
        type: 'input',
    },
    {
        name: 'installation',
        message: 'What are the steps required to install your project?',
        type: 'input',
    },
    {
        name: 'usage',
        message: 'How do you use this app?',
        type: 'input',
    },
    {
        name: 'contributing',
        message: 'Please write the contributors of the project',
        type: 'input',
    },
    {
        name: 'tests',
        message: 'Please mention the tests for the project',
        type: 'input',
    },
    {
        name: 'license',
        message: 'Please chooses th license for the application',
        type: 'list',
        choices: ['MIT', 'GNU' ]
    },
    {
        name: 'github',
        message: 'Please enter your github username',
        type: 'input',
    },
    {
        name: 'email',
        message: 'Please enter enters the email address to reach for any additional questions',
        type: 'input',
    },

])
}


promptUser()
  .then((answers) => writeFileAsync('READE.md'))
  .then(() => console.log('READMe file has been generated successfully'))
  .catch((err) => console.error(err));