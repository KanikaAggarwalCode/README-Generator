const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

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
        name: 'questions',
        message: 'Please enter enters the email address to reach for any additional questions',
        type: 'input',
    }

])
}

const generateFile = (answers) => {

    fs.writeFile('READMEEE.md', generateMarkdown(answers),(err) =>{
        if (err) {console.log(err);}
        else {console.log('The README file has been generated successfully')}
    })
};

// Initialising the function
promptUser()
    .then(generateFile) 
    .catch((err) => console.error(err));