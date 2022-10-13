// Pre-req goal :  on submitting a form                 completed
// goal 1 : get the values of the two input field       completed
// goal 2 : add the values of the two inputs            completed
// goal 3 : display the sum of the inputs

function addition(param1, param2) {
  const number1 = +param1;
  const number2 = +param2;
  const sum = number1 + number2;
  return sum;
}

function submitHandler1() {
  event.preventDefault(); //. to prevent the page from reloading

  const firstInput = document.getElementById("firstInput1");
  const secondInput = document.getElementById("secondInput1");

  console.log("firstInput is " + firstInput.value);
  console.log("secondInput is " + secondInput.value);

  const sum = addition(firstInput.value, secondInput.value);
  console.log("Sum is = " + sum);

  const div = document.getElementById("answer1");
  div.innerText = sum;
}

// subtraction
function subtraction(param1, param2) {
  const number1 = +param1;
  const number2 = +param2;
  const differ = number1 - number2;
  return differ;
}

function submitHandler2() {
  event.preventDefault(); //. to prevent the page from reloading

  const firstInput = document.getElementById("firstInput2");
  const secondInput = document.getElementById("secondInput2");

  console.log("firstInput is " + firstInput.value);
  console.log("secondInput is " + secondInput.value);

  const differ = subtraction(firstInput.value, secondInput.value);
  console.log("Differ is = " + differ);

  const div = document.getElementById("answer2");
  div.innerText = differ;
}

// multiplication
function multiplication(param1, param2) {
  const number1 = +param1;
  const number2 = +param2;
  const multiply = number1 * number2;
  return multiply;
}

function submitHandler3() {
  event.preventDefault(); //. to prevent the page from reloading

  const firstInput = document.getElementById("firstInput3");
  const secondInput = document.getElementById("secondInput3");

  console.log("firstInput is " + firstInput.value);
  console.log("secondInput is " + secondInput.value);

  const multiply = multiplication(firstInput.value, secondInput.value);
  console.log("Product is = " + multiply);

  const div = document.getElementById("answer3");
  div.innerText = multiply;
}
// division
function division(param1, param2) {
  const number1 = +param1;
  const number2 = +param2;
  const divide = number1 / number2;
  return divide;
}

function submitHandler4() {
  event.preventDefault(); //. to prevent the page from reloading

  const firstInput = document.getElementById("firstInput4");
  const secondInput = document.getElementById("secondInput4");

  console.log("firstInput is " + firstInput.value);
  console.log("secondInput is " + secondInput.value);

  const divide = division(firstInput.value, secondInput.value);
  console.log("dividend is = " + divide);

  const div = document.getElementById("answer4");
  div.innerText = divide;
}