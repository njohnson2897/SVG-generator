const Triangle = require('./triangles.js')
const Circle = require('./circles.js')
const Rectangle = require('./rectangles.js')




function createSVG(response) {
    const triangle = new Triangle(response.shapeColor).render()
    const circle = new Circle(response.shapeColor).render()
    const rectangle = new Rectangle(response.shapeColor).render()
    if (response.shape === "Triangle") {
        return `<svg version='1.1' width='300' height='300' xmlns='http://www.w3.org/2000/svg'>
        ${triangle}
        <text x='150' y='230' font-size='100' text-anchor='middle' fill='${response.textColor}'>${response.text}</text>
        </svg>`
    } else if (response.shape === 'Square') {
        return `<svg version='1.1' width='300' height='300' xmlns='http://www.w3.org/2000/svg'>
        ${rectangle}
        <text x='150' y='200' font-size='150' text-anchor='middle' fill='${response.textColor}'>${response.text}</text>
        </svg>`
    } else if (response.shape === 'Circle') {
        return `<svg version='1.1' width='300' height='300' xmlns='http://www.w3.org/2000/svg'>
        ${circle}
        <text x='150' y='185' font-size='125' text-anchor='middle' fill='${response.textColor}'>${response.text}</text>
        </svg>`
    }

}


module.exports = createSVG;
