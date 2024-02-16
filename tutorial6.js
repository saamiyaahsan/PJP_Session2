// Uses-A relationship using Javascript

// Parent object
var Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

// Child object utilizing the Calculator functionality
var MathOperations = {
  calculator: Object.create(Calculator), // Composition: MathOperations has-a Calculator

  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
};

// Using the MathOperations object
console.log(MathOperations.calculator.add(5, 3));       // Output: 8
console.log(MathOperations.calculator.subtract(10, 4)); // Output: 6
console.log(MathOperations.multiply(2, 6));            // Output: 12
console.log(MathOperations.divide(10, 2));             // Output: 5
