const Shape = require('./shapes.js')

class Circle extends Shape {
    constructor(fill) {
        super(fill);
    }

    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_circle1
        return `<circle r="150" cx="150" cy="150" fill="${this.fill}" />`
    }
}

module.exports = Circle;