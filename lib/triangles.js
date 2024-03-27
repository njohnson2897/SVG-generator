const Shape = require('./shapes.js')

class Triangle extends Shape  {
    constructor(fill) {
        super(fill);
    }

    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_polygon
        return `<polygon points="0 300, 150 0, 300 300" style="fill:${this.fill}"/>`
    }
}

module.exports = Triangle;