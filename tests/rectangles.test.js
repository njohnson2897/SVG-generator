const Square = require('../lib/rectangles.js')

// testing that rendering square returns the proper string
describe('Square', () => {
    it('should render a string indicating an SVG square with blue fill', () => {
        const square = new Square('Blue')
        const expectedTag = `<rect width="200" height="200" x="10" y="10" fill="Blue"/>`
        expect(square.render()).toEqual(expectedTag)
    })
})