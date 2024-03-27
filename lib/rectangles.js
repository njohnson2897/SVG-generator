const Shape = require('./shapes.js')

// Square is a child of shape and takes the parent "fill" property
class Square extends Shape {
    constructor(fill) {
        super(fill);
    }

// render() on an instantiated square will return this string to round out the SVG file
    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_rect0
        return `<rect width="200" height="200" x="10" y="10" fill="${this.fill}"/>`
    }
}

module.exports =  Square;