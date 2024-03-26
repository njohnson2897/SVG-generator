const Inquirer = require('inquirer')
const fs = require('fs')
const Shape = require('./lib/shapes.js')
const Triangle = require('./lib/triangles.js')
const Circle = require('./lib/circles.js')
const Rectangle = require('./lib/rectangles.js')

const triangle = new Triangle(response.shapeColor).render()



function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('SVG file successfully created'))
};

// function createSVG(text, textColor, shape, shapeColor) {
//     if (response.shape === 'Triangle') {
//     return `<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
//     c
//    </svg>`
//     }
// //    if response.shape === Circle
//     return ``
// }


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