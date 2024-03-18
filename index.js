const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// prompting the user for answers

const promptUser = () => {
  return  inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        
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
    }

])
}

const generateFile = (answers) => {
    fs.writeFile('READMEEE.md', answers)
        .then(console.log('README file has been generated successfully'));
    ;
};

promptUser()
    .then(generateFile) // Corrected: Pass the function reference, not the result of calling it
    .catch((err) => console.error(err));