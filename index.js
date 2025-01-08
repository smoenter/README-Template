// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'How would you describe your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What license does your project use?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'No License'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'How does someone contribute to your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How do you run tests for your project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'For questions, please contact [Your Name](email: youremail@example.com)',
        name: 'questions',
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
            console.error('Error writing file', err);
    } else {
            console.log('README.md successfully generated!');
    }
});

}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
         const README= generateMarkdown(answers)
         writeToFile("README.md", README);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function call to initialize app
init();
