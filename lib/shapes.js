class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error('Not implemented');
  }
}

class Circle extends Shape {
  constructor(x, y, radius, color) {
    super(x, y, color);
    this.radius = radius;
  }

  render() {
    return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  render() {
    const x1 = 50;
    const y1 = 0;
    const x2 = 100;
    const y2 = 100;
    const x3 = 0;
    const y3 = 100;
    return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(x, y, sideLength, color) {
    super(x, y, color);
    this.sideLength = sideLength;
  }

  render() {
    const halfSideLength = this.sideLength / 2;
    const x = this.x - halfSideLength;
    const y = this.y - halfSideLength;
    return `<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square
};