function calculate() {
        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat (document.getElementById ('number2').value);
        const operation = document.getElementById('operation').value;
        let result;

        if (operation === 'add') {
            result = number1 + number2
        } else if (operation === 'substract') {
            result = number1 - number2;
        }

        document.getElementById('result').textContent ='Result:' + result; 
    }