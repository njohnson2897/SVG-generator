const Shape = require('../lib/shapes.js')

describe('Shape', () => {
    it('should throw error if render() is called to new shape', () => {
        const shape = new Shape();
        const err = new Error('Child class must implement a render() method.')
        expect(shape.render).toThrow(err)
    })
})