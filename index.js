const Inquirer = require('inquirer')

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
    ]);