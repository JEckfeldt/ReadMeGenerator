const { prompt } = require('inquirer')
const fs = require('fs')
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
  prompt([
    {
      name: "title",
      type: 'input',
      message: "Title of project?",
    },
    {
      name: "description",
      message: "Description of project?",
    },
    {
      name: "screenshot",
      message: "URL to screenshot of project?",
    },
    {
      name: "installation",
      message: "Installation instruction?",
    },
    {
      name: "usage",
      message: "Usage info?",
    },
    {
      name: "license",
      type: 'list',
      message: "Test instructions?",
      choices: ['MIT', 'Apache 2.0', 'GPLv3'],
    },
    {
      name: "contributing",
      message: "Contributing info?",
    },
    {
      name: "tests",
      message: "Test instructions?",
    },
    {
      name: "questions",
      message: "What email address can users send questions to?",
    },
    {
      name: "github",
      message: "What is your github username?",
    },
  ])
  .then (answer => {
    const head = `
<h1 align = "center">${answer.title}</h1>
<div align = "center">${answer.desc}<div>
<img src="${answer.screenshot}" align="center" alt="Screenshot of Application">
    `
    fs.appendFile('fakereadme.md', head, err => {
      if (err) { console.log(err) }
    })

    //markdown the body
    const markdownBody = `
---
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
---
## Installation
${answer.installation}
## Usage
${answer.usage}
## License
This application is free and open-source software licensed under the ${answer.license} license.
  `
    // Define markdownFoot
    const markdownFoot = `
## Contributing
${answer.contributing}
## Tests
${answer.tests}
## Questions
Have any questions about the application? Please feel free to ask at ${answer.questions}.
Please visit my github at https://github.com/${answer.github}/ to see this project and more.
  `


    fs.appendFile('fakereadme.md', markdownBody + markdownFoot, err => {
      if (err) { console.log(err) }
      console.log('README File Created!')
    })
  })
  .catch(err => console.error(err))

