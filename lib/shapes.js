class Shape {
    // fill is the only characteristic of the shape itself that it picked by the user and thus the only parameter
    constructor(fill) {
        this.fill = fill;
    }
    // we will never need to use render on the parent class so it should throw an error if used
    render() {
        throw new Error('Child class must implement a render() method.')
    }
}

module.exports = Shape;