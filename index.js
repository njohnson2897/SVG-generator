// imports the necessary modules
const Inquirer = require('inquirer')
const fs = require('fs')
const createSVG = require('./lib/document.js')

// this function actually creates the SVG file using the data provided by the user and provided by the createSVG function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg'))
};

// user  input that drives the shape, color, and text of the resulting SVG image
Inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message: "Please type up to 3 characters to serve as the text of your logo",    
        },
        {
            type: "input",
            name: "textColor",
            message: "What color would you like the text of your logo to be?",
        },
        {
            type: "list",
            name: "shape",
            message: "What shape would you like your logo to be?",
            choices: ["Triangle", "Circle", "Square"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like the shape to be?",
        }
    ])
    
    .then((response) => {
        writeToFile('./output/logo.svg', createSVG(response));
    });