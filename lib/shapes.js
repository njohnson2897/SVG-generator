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
}

class Circle extends Shape {
    constructor(height, width, fill, r, cx, cy) {
        super(height, width, fill);
        this.r = r;
        this.cx = cx;
        this.cy = cy;
    }
}

class Rectangle extends Shape {
    constructor(height, width, fill, rectWidth, rectHeight, x, y, rx, ry) {
        super(height, width, fill)
        this.rectWidth = rectWidth;
        this.rectHeight = rectHeight;
        this.x = x;
        this.y = y;
        this.rx = rx;
        this.ry = ry;
    }
}