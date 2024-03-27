const Shape = require('./shapes.js')

class Rectangle extends Shape {
    constructor(fill) {
        super(fill);
    }

    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_rect0
        return `<rect width="300" height="300" x="10" y="10" fill="${this.fill}"/>`
    }
}

module.exports =  Rectangle;