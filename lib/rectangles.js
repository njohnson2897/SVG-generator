const Shape = require('./shapes.js')

class Rectangle extends Shape {
    constructor(fill) {
        super(fill);
    }

    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_rect0
        return `<rect width="200" height="200" x="10" y="10" fill="${this.fill}"/>`
    }
}

module.exports =  Rectangle;