const inquirer = require('inquirer');
const fs = require('fs');
const {Shape,Circle, Triangle, Square} = require('./lib/shapes');

class Svg {
  constructor(){
    this.textElement =''
    this.shapeElement =''
  }
  render(){
    return `version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"`
  }
  setText(text,color){
    this.textElement= ` <text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}>${text}</text>`
  }
  setShapeElement(shape){
    this.shapeElement = shape.render()
  }
}

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
  const svg = new Svg();
  svg.setText(data.text, data.textColor);
  
  switch (data.shape) {
    case 'circle':
      svg.setShapeElement(new Circle(data.shapeColor));
      break;
    case 'triangle':
      svg.setShapeElement(new Triangle(data.shapeColor));
      break;
    case 'square':
      svg.setShapeElement(new Square(data.shapeColor));
      break;
    default:
      console.error(`Invalid shape selected: ${data.shape}`);
      return;
  }
  
  const svgContent = `<svg ${svg.render()}>${svg.shapeElement}${svg.textElement}</svg>`;

  
  fs.writeFile(folderPath + fileName, svgContent, (err) => {
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