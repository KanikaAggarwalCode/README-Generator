// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  
  ${answers.description}
  
  ## Table of Contents 
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## Credits
  
  ${answers.contributing}
  
  ## License
  
  ${answers.license}
  
  ## Tests
  
  ${answers.tests}
  
  ## Questions

  Please enter the email address to reach out for more questions
  ${answers.questions}`
  

;
}

module.exports = generateMarkdown;
