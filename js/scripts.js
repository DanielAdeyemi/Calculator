// Addition function
function add(num1, num2) {
  return num1 + num2;
  }

// Substraction function
function sub(num1, num2) {
  return num1 - num2;
}

//Multiplication function
function mult(num1, num2) {
  return num1 * num2;
}

//Dixision function
function div(num1, num2) {
  return num1 / num2;
}


  const num1 = parseInt(prompt('Enter the number: '));
  const num2 = parseInt(prompt('Enter another number: '));

  const result = div(num1, num2);
  alert(result);