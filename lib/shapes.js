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
  render() {
   return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="50, 0, 100, 100, 100" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square
};