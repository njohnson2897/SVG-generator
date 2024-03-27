const Shape = require('./shapes.js')

// Circle is a child of shape and takes the parent "fill" property
class Circle extends Shape {
    constructor(fill) {
        super(fill);
    }
// render() on an instantiated circle will return this string to round out the SVG file
    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_circle1
        return `<circle r="100" cx="100" cy="100" fill="${this.fill}"/>`
    }
}

module.exports = Circle;