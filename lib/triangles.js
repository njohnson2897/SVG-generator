const Shape = require('./shapes.js')

class Triangle extends Shape  {
    constructor(height, width, fill, points) {
        super(height, width, fill);
        this.points = points;
    }

    render() {
        // https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_polygon
        return `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100 30, 200 200, 0 200" style="fill:lime" />
      </svg>`
    }
}

module.exports = Triangle;