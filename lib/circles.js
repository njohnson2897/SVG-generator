const Shape = require('./shapes.js')

class Circle extends Shape {
    constructor(height, width, fill, r, cx, cy) {
        super(height, width, fill);
        this.r = r;
        this.cx = cx;
        this.cy = cy;
    }

    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_circle1
        return `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill="red" />
      </svg> `
    }
}

module.exports = Circle;