const Shape = require('./shapes.js')

// Triangle is a child of Shape and takes the parent "fill" property
class Triangle extends Shape  {
    constructor(fill) {
        super(fill);
    }
// render() on an instantiated triangle will return this string to round out the SVG file
    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_polygon
        return `<polygon points="0 300, 150 0, 300 300" style="fill:${this.fill}"/>`
    }
}

module.exports = Triangle;