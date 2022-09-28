
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const [name, github] = profileDataArgs;


const generateMarkdown = (userName, githubName) => {
    return `
        ## Title
        Name: ${userName}
        Github: ${githubName}
    `;
};

fs.generateMarkdown('readMee.md', generateMarkdown(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });


/* 1. TODO: Include packages needed for this application. 
Go to root directory of folder and type <npm install inquierer@8.2.4> in the termainl to install inquirer*/

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('Develop/utils/generateMarkdown.js');

// 2. TODO: Create an array of questions for user input*/
const questions = function(questionData){
    return inquirer
    .prompt (
    [
        {
            type: 'input',
            message: "What is the name of your project?",
            name: "title"
        },
        {
            type: 'input',
            message: "Please provide a Table of Contents for this project.",
            name: "tableOfContents"
        },
        {
            type: 'input',
            message: "What's your username?",
            name: "username"
        },
        {
            type: 'input',
            message: "Please provide a description of the project.",
            name: "projectDescripton"
        },
    ]);
}

/* 3. TODO: Create a function to write README file
function writeToFile(fileName, data) {}*/

function writeToFile(fileName, data) {

} 

/*/ TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();*/