const { Triangle } = require('./shapes.js');

describe('Triangle', () => {
  it('renders an SVG string with the correct color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="50,0 100,100 0,100" fill="blue" />');
  });
});
