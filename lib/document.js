const Triangle = require('./lib/triangles.js')
const Circle = require('./lib/circles.js')
const Rectangle = require('./lib/rectangles.js')

const triangle = new Triangle(response.shapeColor).render()
const circle = new Circle(response.shapeColor).render()
const rectangle = new Rectangle(response.shapeColor).render()



function createSVG(response) {
    if (response.shape === "Triangle") {
        return `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
        ${triangle}
        <text x='150' y='125' font-size='50' text-anchor='middle' fill='${response.textColor}'>${response.text}</text>
        </svg>`
    } else if (response.shape === 'Rectangle') {
        return `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
        ${rectangle}
        <text x='150' y='125' font-size='50' text-anchor='middle' fill='${response.textColor}'>${response.text}</text>
        </svg>`
    } else if (response.shape === 'Circle') {
        return `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
        ${circle}
        <text x='150' y='125' font-size='50' text-anchor='middle' fill='${response.textColor}'>${response.text}</text>
        </svg>`
    }

}


module.exports = createSVG;
