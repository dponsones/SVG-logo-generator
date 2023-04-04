const inquirer = require('inquirer');
const fs = require('fs');
const generateShapes = require('./lib/generateShapes')


const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: function (input) {
      return input.length <= 3;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal number):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal number):',
  },
];


function writeToFile(fileName, data) {
  const folderPath = './examples/'
  const shapeContent = generateShapes(data);
  fs.writeFile(folderPath + fileName, shapeContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Logo generated successfully!');
    }
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile('logo.svg', answers);
  });
};

// // Function call to initialize app
init();