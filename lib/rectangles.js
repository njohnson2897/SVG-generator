const Shape = require('./shapes.js')

class Rectangle extends Shape {
    constructor(height, width, fill, rectWidth, rectHeight, x, y, rx, ry) {
        super(height, width, fill)
        this.rectWidth = rectWidth;
        this.rectHeight = rectHeight;
        this.x = x;
        this.y = y;
    }

    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_rect0
        return `<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
         <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="blue"/>
        </svg>`
    }
}

module.exports =  Rectangle;