const Triangle = require('../lib/triangles.js')

// testing that rendering triangle returns the proper string
describe('Triangle', () => {
    it('should render a string indicating an SVG triangle with blue fill', () => {
        const expectedTag = `<polygon points="0 300, 150 0, 300 300" style="fill:Blue"/>`
        const triangle = new Triangle('Blue')
        expect(triangle.render()).toEqual(expectedTag)
    })
})