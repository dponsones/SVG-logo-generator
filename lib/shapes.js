class Circle {
  constructor(color) {
    this.x = 50;  // default values for the circle properties
    this.y = 50;
    this.radius = 25;
    this.color = color;
  }
}

class Triangle {
  constructor(color) {
    this.x = 50;  // default values for the triangle properties
    this.y = 50;
    this.sideLength = 50;
    this.color = color;
  }
}

class Square {
  constructor(color) {
    this.x = 50;  // default values for the square properties
    this.y = 50;
    this.sideLength = 50;
    this.color = color;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square
};