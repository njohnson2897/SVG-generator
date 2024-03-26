class Shape {
    constructor(height, width, fill) {
        this.height = height;
        this.width = width;
        this.fill = fill;
    }
}

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