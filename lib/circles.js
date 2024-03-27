const Shape = require('./shapes.js')

class Circle extends Shape {
    constructor(fill) {
        super(fill);
    }

    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_circle1
        return `<circle r="100" cx="100" cy="100" fill="${this.fill}" />`
    }
}

module.exports = Circle;