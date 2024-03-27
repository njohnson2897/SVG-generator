const Shape = require('../lib/shapes.js')

// test confirming that using the render() method on Shape throws an error
describe('Shape', () => {
    it('should throw error if render() is called to new shape', () => {
        const shape = new Shape();
        const err = new Error('Child class must implement a render() method.')
        expect(shape.render).toThrow(err)
    })
})