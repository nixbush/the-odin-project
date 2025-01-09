/* TODO: For future me
 * - Add the complete operations in the `displayOperation` thing. Currently, all it does is display
 *   the last arithmetic operation
 */

const displayOperation = document.querySelector('#d-operation')
const displayOutput = document.querySelector('#d-output')

const buttons = document.querySelectorAll('button.item')
buttons.forEach((b) => {
   b.addEventListener('click', () =>
      handleOperation(b.className.split(' ')[1], b.textContent)
   )
})

window.addEventListener('keydown', (e) => {
   if (e.defaultPrevented) {
      return
   }

   switch (e.key) {
      case '+':
         handleOperation('i-add', '+')
         break
      case '-':
         handleOperation('i-subtract', '-')
         break
      case '*':
         handleOperation('i-multiply', '×')
         break
      case '/':
         handleOperation('i-divide', '÷')
         break
      case 'Backspace':
         handleOperation('i-del', '')
         break
      case '.':
         handleOperation('i-dot', '.')
         break
      case '=':
      case 'Enter':
         handleOperation('i-equals', '=')
         break
      default:
         if (!isNaN(e.key)) {
            handleOperation('', e.key)
         }
         break
   }
})

let calculatorOperation = ['0']
let calculatorFinished = false
function handleOperation(operation, content) {
   const calculatorArithmatic = [
      'i-divide',
      'i-multiply',
      'i-subtract',
      'i-add',
      'i-equals',
   ]

   switch (operation) {
      case 'i-del':
         // Remove last character
         displayOutput.textContent = displayOutput.textContent.slice(0, -1)
         // TODO: Handle if no more numbers to delete
         break
      case 'i-clear':
         displayOutput.textContent = '0'
         displayOperation.textContent = ''
         calculatorOperation = ['0']
         break
      case 'i-dot':
         const outputText = displayOutput.textContent
         displayOutput.textContent += outputText.indexOf('.') === -1 ? '.' : ''
         break
      case 'i-sign':
         let currentVal = +displayOutput.textContent
         currentVal *= -1
         displayOutput.textContent = currentVal
         break
      default:
         if (calculatorArithmatic.indexOf(operation) > -1) {
            if (calculatorOperation.length === 1) {
               // Handle default value
               calculatorOperation[0] = displayOutput.textContent
            } else {
               calculatorOperation.push(displayOutput.textContent)
            }
            calculatorOperation.push(operation)
            displayOutput.textContent = '0' // Reset display value
            displayOperation.textContent = content

            if (operation === 'i-equals') {
               const result = handleCalculation(calculatorOperation)
               // Reset the values
               displayOutput.textContent = result
               calculatorOperation = ['0']
               calculatorFinished = true
            }
         } else {
            // Handle default value
            if (displayOutput.textContent === '0' || calculatorFinished) {
               displayOutput.textContent = content
               calculatorFinished = false
            } else {
               displayOutput.textContent += content
            }
         }
         break
   }
}

function handleCalculation(operations) {
   let result = 0
   let lastOperator = ''

   for (const [i, operand] of operations.entries()) {
      // The default first operand is always a number. I hope.
      if (i === 0) {
         result = +operand
         continue
      }

      if (isNaN(operand)) {
         if (lastOperator === '') lastOperator = operand
      } else {
         if (lastOperator !== '') {
            switch (lastOperator) {
               case 'i-add':
                  result += +operand
                  break
               case 'i-subtract':
                  result -= +operand
                  break
               case 'i-multiply':
                  result *= +operand
                  break
               case 'i-divide':
                  result /= +operand
                  break
            }
            lastOperator = ''
         }
      }
   }

   return result
}
