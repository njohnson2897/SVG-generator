const Circle = require('../lib/circles.js')

describe('Circle', () => {
    it('should render      ', () => {
        const circle = new Circle('Blue')
        const expectedTag = `<circle r="100" cx="100" cy="100" fill="Blue"/>`
        expect(circle.render()).toEqual(expectedTag)
    })
})