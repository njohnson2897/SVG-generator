class Shape {
    constructor(height, width, fill) {
        this.height = height;
        this.width = width;
        this.fill = fill;
    }
    
    render() {
        throw new Error('Child class must implement a render() method.')
    }
}

module.exports = Shape;