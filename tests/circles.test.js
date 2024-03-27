const Circle = require('../lib/circles.js')

// testing that rendering circle returns the proper string
describe('Circle', () => {
    it('should render a string indicating an SVG circle with blue fill', () => {
        const circle = new Circle('Blue')
        const expectedTag = `<circle r="100" cx="100" cy="100" fill="Blue"/>`
        expect(circle.render()).toEqual(expectedTag)
    })
})