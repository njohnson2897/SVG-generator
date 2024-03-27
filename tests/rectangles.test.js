const Rectangle = require('../lib/rectangles.js')

describe('Rectangle', () => {
    it('should render      ', () => {
        const rectangle = new Rectangle('Blue')
        const expectedTag = `<rect width="200" height="200" x="10" y="10" fill="Blue"/>`
        expect(rectangle.render()).toEqual(expectedTag)
    })
})