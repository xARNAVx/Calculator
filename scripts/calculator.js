let calculation = '';

      function appendToCalculation(value) {
        calculation += value;
        updateResult();
      }

      function calculateResult() {
        try {
          calculation = eval(calculation);
          updateResult();
        } catch (error) {
          calculation = 'Error';
          updateResult();
        }
      }

      function clearCalculation() {
        calculation = '';
        updateResult();
      }

      function updateResult() {
        document.getElementById('result').textContent = calculation;
      }