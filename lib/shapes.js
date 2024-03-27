class Shape {
    constructor(fill) {
        this.fill = fill;
    }
    render() {
        throw new Error('Child class must implement a render() method.')
    }
}

module.exports = Shape;