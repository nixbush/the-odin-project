/* TODO: For future me
 * - Add the complete operations in the `displayOperation` thing. Currently, all it does is display
 *   the last arithmetic operation
 * - Add keyboard support
 */

const displayOperation = document.querySelector("#d-operation");
const displayOutput = document.querySelector("#d-output");

const buttons = document.querySelectorAll("button.item");
buttons.forEach((b) => {
  b.addEventListener("click", () => handleOperation(b));
});

let calculatorOperation = ["0"];
function handleOperation(button) {
  const operation = button.className.split(" ")[1];
  const calculatorArithmatic = [
    "i-divide",
    "i-multiply",
    "i-subtract",
    "i-add",
    "i-equals",
  ];

  switch (operation) {
    case "i-del":
      // Remove last character
      displayOutput.textContent = displayOutput.textContent.slice(0, -1);
      // TODO: Handle if no more numbers to delete
      break;
    case "i-clear":
      displayOutput.textContent = "0";
      displayOperation.textContent = "";
      calculatorOperation = ["0"];
      break;
    case "i-dot":
      const outputText = displayOutput.textContent;
      displayOutput.textContent += outputText.indexOf(".") === -1 ? "." : "";
      break;
    case "i-sign":
      let currentVal = +displayOutput.textContent;
      currentVal *= -1;
      displayOutput.textContent = currentVal;
      break;
    default:
      if (calculatorArithmatic.indexOf(operation) > -1) {
        if (calculatorOperation.length === 1) {
          // Handle default value
          calculatorOperation[0] = displayOutput.textContent;
        } else {
          calculatorOperation.push(displayOutput.textContent);
        }
        calculatorOperation.push(operation);
        displayOutput.textContent = "0"; // Reset display value
        displayOperation.textContent = button.textContent;

        // If "=", then do the calculations
        if (operation === "i-equals") {
          const result = handleCalculation(calculatorOperation);
          displayOutput.textContent = result;
          calculatorOperation = ["0"];
          console.log(calculatorOperation);
        }
      } else {
        // Handle default value
        if (displayOutput.textContent === "0") {
          displayOutput.textContent = button.textContent;
        } else {
          displayOutput.textContent += button.textContent;
        }
      }

      break;
  }
}

function handleCalculation(operations) {
  let result = 0;
  let lastOperator = "";

  /*
   * for loop
   *   if start store it as result then continue
   *   if it is an operator, check if lastOperator is empty, if so just store and continue
   *   if not empty lastOperator and current operand is a number, do that operation and add to result
   *       then set lastOperator back to empty
   *
   */

  for (const [i, operand] of operations.entries()) {
    if (i === 0) {
      result = +operand;
      continue;
    }

    if (isNaN(operand)) {
      if (lastOperator === "") lastOperator = operand;
    } else {
      if (lastOperator !== "") {
        switch (lastOperator) {
          case "i-add":
            result += +operand;
            break;
          case "i-subtract":
            result -= +operand;
            break;
          case "i-multiply":
            result *= +operand;
            break;
          case "i-divide":
            result /= +operand;
            break;
        }
        lastOperator = "";
      }
    }
  }

  return result;
}
