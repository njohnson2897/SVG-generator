const Triangle = require('../lib/triangles.js')

describe('Triangle', () => {
    it('should render      ', () => {
        const expectedTag = `<polygon points="0 300, 150 0, 300 300" style="fill:Blue"/>`
        const triangle = new Triangle('Blue')
        expect(triangle.render()).toEqual(expectedTag)
    })
})