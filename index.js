const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// const writeToFile = util.promisify(fs.writeFile);

const questions = [
{
    type: "input",
    name: "name",
    message: "What is your name?"
},
{
    type: "checkbox",
    name: "language",
    message: "What languages did you use on this project?",
    choices: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "MySQL"
      ]
},

{
    type: "input",
    name: "title",
    message: "What is your project title?"
},

{
    type: "input",
    name: "description",
    message: "Please describe your project:"
},

// {
//     type: "input",
//     name: "tableofcontents",
//     message: ""
// },

{
    type: "input",
    name: "installation",
    message: "What all needs to be installed in order for your project to work?",
    default: "Node.js, Inquirer, and Util"
},

{
    type: "input",
    name: "usage",
    message: "Please describe how to use your project:"
},

{
    type: "list",
    name: "license",
    message: "Which license would you like for your project?",
    choices: [
        "MIT",
        "GNU GPLv3",
        "Apache License 2.0",
        "ISC",
    ]
},

{
    type: "input",
    name: "contributing",
    message: "Who helped work on this project?"
},

{
    type: "input",
    name: "tests",
    message: "Please describe your project:"
},

{
    type: "input",
    name: "githubURL",
    message: "Please enter your GitHub username:"
},
];

inquirer.prompt(questions).then((data) => {
    console.log(data.name);
    console.log(data.language);
    console.log(data.license);
})

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
