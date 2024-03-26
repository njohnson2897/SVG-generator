const Shape = require('./shapes.js')

class Triangle extends Shape  {
    constructor(fill) {
        super(fill);
    }

    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_polygon
        return `<polygon points="100 30, 200 200, 0 200" style="fill:${this.fill}" />`
    }
}

module.exports = Triangle;