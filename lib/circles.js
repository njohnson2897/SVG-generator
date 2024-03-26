const Shape = require('./shapes.js')

class Circle extends Shape {
    constructor(fill) {
        super(fill);
    }

    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_circle1
        return `<circle r="45" cx="50" cy="50" fill="${response.shapeColor}" />`
    }
}

module.exports = Circle;