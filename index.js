const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeToFile = util.promisify(fs.writeFile);

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
    message: "Please instruct how to use your project:"
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
    name: "credits",
    message: "Who helped work on this project?"
},

{
    type: "input",
    name: "tests",
    message: "If you have any tests, please enter the file path:"
},

{
    type: "input",
    name: "githubURL",
    message: "Please enter your GitHub username:"
},

{
    type: "input",
    name: "email",
    message: "Please enter your email:"
},

];

inquirer.prompt(questions).then(( { name, language, title, description, tableofcontents, installation, usage, license, credits, tests, githubURL, email } ) => {
    console.log(data.name);
    console.log(data.language);
    console.log(data.license);

let readmeTemplate = `
# ${title}

## Description 

${description}

## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

In order to run my application, you will need to install ${installation}.

## Usage 

${usage}

## Credits

${credits}


## License



---


# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the
  overall community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or
  advances of any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email
  address, without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
${email}.
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series
of actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or
permanent ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior,  harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within
the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.

Community Impact Guidelines were inspired by [Mozilla's code of conduct
enforcement ladder](https://github.com/mozilla/diversity).

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see the FAQ at
https://www.contributor-covenant.org/faq. Translations are available at
https://www.contributor-covenant.org/translations.

## Tests

${tests}

`;

writeToFile("README.md", readmeTemplate, "utf8");
}).then(() => {
    console.log("Success!");
}).catch(err => {
    console.log(err);
});



// function init() {

// }

// init();
