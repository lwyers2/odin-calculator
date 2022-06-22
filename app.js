let Calculator = class Calculator {

    constructor(hasOperatorSet, isNegativeA, isNegativeB) {
        this.hasOperatorSet = hasOperatorSet;
        this.isNegativeA = isNegativeA;
        this.isNegativeB = isNegativeB;
    }

    //Setters
    setA(newA) {

        if (typeof newA === 'undefined') {
            this.a = newA;
        } else {
            newA = newA.toString();

            if (newA.charAt(0) === '-') {
                this.isNegativeA = true;
            } else {
                this.isNegativeA = false;
            }
            this.a = parseFloat(newA);
        }
    }

    setB(newB) {
        if (typeof newB === 'undefined') {
            this.b = newB;
        } else {
            newB = newB.toString();

            if (newB.charAt(0) == '-') {
                this.isNegativeB = true;
            } else {
                this.isNegativeB = false;
            }
            this.b = parseFloat(newB);
        }
    }



    setOperator(newOperator) {
        this.operator = newOperator;
    }


    setResult(result) {

        if (typeof result === 'undefined') {
            this.result = result;
        } else {

            if (result.charAt(0) == '-') {
                this.isNegativeA = true;
            } else {
                this.isNegativeA = false;
            }
            this.result = parseFloat(result);
            this.a = this.result;
        }


    }

    setHasOperatorSet(hasOperatorSet) {
        this.hasOperatorSet = hasOperatorSet;
    }

    setIsNegativeA(isNegativeA) {



        this.isNegativeA = isNegativeA;
    }


    setIsNegativeB(isNegativeB) {
        this.isNegativeB = isNegativeB;
    }

    //getters
    get getA() {
        return this.a;
    }

    get getB() {
        return this.b;
    }

    get getOperator() {
        return this.operator;
    }

    get getResult() {
        return this.result;
    }

    get getHasOperatorSet() {
        return this.hasOperatorSet;
    }

    get getIsNegativeA() {
        return this.isNegativeA
    }

    get getIsNegativeB() {
        return this.isNegativeB
    }




    //returns and sets the result of a calculation
    calculate() {

        let add = (a, b) => (a) + (b);

        let subtract = (a, b) => (a) - (b);

        let multiply = (a, b) => (a) * (b);

        let divide = (a, b) => (a) / (b);

        let operation;

        if (this.operator == '/') {

            operation = divide;
        } else if (this.operator == '*') {
            operation = multiply;
        } else if (this.operator == '-') {
            operation = subtract;
        } else if (this.operator == '+') {
            operation = add;
        }

        if (operation === divide && this.b === 0) {
            alert("Cannot Divide by 0! Please hit 'CE' to Reset")
        } else {


            let calculation = (operation(this.a, this.b));
            //update calculators's stored result
            this.result = parseFloat(calculation);
            this.hasOperatorSet = false;
        }
    }




}
enterButtons();
//create new instance of calculator

const p1 = new Calculator(false, false, false);


document.addEventListener('keydown', pressButtons);

function pressButtons(e) {
    console.log(e.key);

    if (e.key === '1') {
        inputNumber('1');
    } else if (e.key === '2') {
        inputNumber('2');
    } else if (e.key === '3') {
        inputNumber('3');
    } else if (e.key === '4') {
        inputNumber('4');
    } else if (e.key === '5') {
        inputNumber('5');
    } else if (e.key === '6') {
        inputNumber('6');
    } else if (e.key === '7') {
        inputNumber('7');
    } else if (e.key === '8') {
        inputNumber('8');
    } else if (e.key === '9') {
        inputNumber('9');
    } else if (e.key === '/') {
        inputOperator('/');
    } else if (e.key === '*') {
        inputOperator('*');
    } else if (e.key === '-') {
        inputOperator('-');
    } else if (e.key === '+') {
        inputOperator('+');
    } else if (e.key === 'Enter') {
        equals();
    } else if (e.key === '.') {
        decimal();
    } else if (e.key === 'Delete') {
        deleteLast();
    } else if (e.key === 'Backspace') {
        deleteLast();
    }
}


function enterButtons() {

    //event listeners for all buttons

    let divide = document.querySelector("#divide");
    divide.addEventListener("click", () => {
        inputOperator('/');
        console.log("pressed");
    });



    let multiply = document.querySelector("#multiply");
    multiply.addEventListener("click", () => {
        inputOperator('*');
    });

    let subtract = document.querySelector("#subtract");
    subtract.addEventListener("click", () => {
        inputOperator('-');
    });

    let add = document.querySelector("#add");
    add.addEventListener("click", () => {
        inputOperator('+');
    });

    let seven = document.querySelector("#seven");
    seven.addEventListener("click", () => {
        inputNumber('7');
    });

    let eight = document.querySelector("#eight");
    eight.addEventListener("click", () => {
        inputNumber('8');
    });

    let nine = document.querySelector("#nine");
    nine.addEventListener("click", () => {
        inputNumber('9');
    });

    let c = document.querySelector("#c");
    c.addEventListener("click", () => {
        deleteLast();
    });

    let four = document.querySelector("#four");
    four.addEventListener("click", () => {
        inputNumber('4');
    });

    let five = document.querySelector("#five");
    five.addEventListener("click", () => {
        inputNumber('5');
    });

    let six = document.querySelector("#six");
    six.addEventListener("click", () => {
        inputNumber('6');
    });

    let ce = document.querySelector("#ce");
    ce.addEventListener("click", () => {
        reset();
    });

    let one = document.querySelector("#one");
    one.addEventListener("click", () => {
        inputNumber('1');
    });

    let two = document.querySelector("#two");
    two.addEventListener("click", () => {
        inputNumber('2');
    });

    let three = document.querySelector("#three");
    three.addEventListener("click", () => {
        inputNumber('3');
    });



    let zero = document.querySelector("#zero");
    zero.addEventListener("click", () => {
        inputNumber('0');
    });

    let decimal = document.querySelector("#decimal");
    decimal.addEventListener("click", () => {
        addDecimal();
    });

    let equal = document.querySelector("#equal");
    equal.addEventListener("click", () => {
        equals();
    });



}


function inputNumber(number) {





    if (p1.getHasOperatorSet || (typeof p1.getResult !== 'undefined')) {


        inputNumberB(number)
    } else {
        inputNumberA(number)
    }
}





function inputNumberA(number) {
    //create dom element for output box
    let output = document.querySelector('.output');

    if (typeof p1.getA !== 'undefined') {
        output.innerHTML = p1.getA;
    }



    if (output.innerHTML.length >= 24) {




        //changes size to large for space
        output.style.fontSize = 'large';

        //create text node with number
        let outputText = document.createTextNode(number);

        //add new number
        output.appendChild(outputText);

        p1.setA(parseFloat(output.innerHTML));
        output.innerHTML = p1.getA;




    } else if (output.innerHTML.length >= 46) {
        let outputText = document.createTextNode(number);
        //remove the last number 
        output.removeChild(output.lastChild);
        //replace last number with new number
        output.appendChild(outputText);
        p1.setA(parseFloat(output.innerHTML));
        output.innerHTML = p1.getA;
    } else {
        //add number to output box
        let outputText = document.createTextNode(number);
        output.appendChild(outputText);
        p1.setA(parseFloat(output.innerHTML));
        output.innerHTML = p1.getA;

    }

    console.log("A= " + p1.getA);
}

function inputNumberB(number) {

    let input = document.querySelector('.input');




    let inputText = document.createTextNode(number);
    input.appendChild(inputText);
    let b = input.innerHTML.substring(2, input.innerHTML.length)
    p1.setB(parseFloat(b));
    input.innerHTML = p1.getOperator + ' ' + p1.getB;
    console.log("B= " + p1.getB);





}









function inputOperator(operator) {


    let input = document.querySelector('.input');
    let output = document.querySelector('.output');
    console.log("PRESSED");
    if ((typeof p1.getA === 'undefined') && (operator == '-')) {

        p1.setIsNegativeA(true);
        output.innerHTML = '-';



    } else {



        if ((p1.getHasOperatorSet) && (typeof p1.getB !== 'undefined')) {
            p1.calculate();

            p1.setA(p1.getResult);
            output.innerHTML = p1.getA;
            p1.setOperator(operator)
            p1.setHasOperatorSet(true)
            input.innerHTML = p1.getOperator + ' ';
            p1.setB(0);


        } else if (p1.getHasOperatorSet && (typeof p1.getB === 'undefined') && operator == '-') {
            p1.setIsNegativeB(true);


        } else if (p1.getHasOperatorSet && (typeof p1.getB === 'undefined')) {
            p1.setOperator(operator)
            p1.setHasOperatorSet(true)
            input.innerHTML = p1.getOperator + ' ';


        } else {
            p1.setOperator(operator)
            p1.setHasOperatorSet(true)
            input.innerHTML = p1.getOperator + ' ';


        }
    }

}


function reset() {
    let input = document.querySelector('.input');
    let output = document.querySelector('.output');
    input.innerHTML = '';
    output.innerHTML = '';
    p1.setA(undefined);
    p1.setB(undefined);
    p1.setOperator(undefined);
    p1.setHasOperatorSet(false);
    p1.setResult(undefined);

}

function deleteLast() {

    let input = document.querySelector('.input');
    let output = document.querySelector('.output');


    if (p1.hasOperatorSet) {


        //check if operator set(will always be 2 due to space)
        if (input.innerHTML.length == 2) {
            input.innerHTML = '';
            p1.setHasOperatorSet(false);
        } else {

            input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
            p1.setB(parseInt(input.innerHTML.substring(0, input.innerHTML.length - 1)));

        }


    } else {

        if (output.innerHTML.length > 1) {
            console.log("hi")
            output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
            p1.setA(parseFloat(output.innerHTML.substring(0, output.innerHTML.length - 1)))

        } else {
            output.innerHTML = '0';
            p1.setA(0);
        }
    }

}

function addDecimal() {

    let input = document.querySelector('.input');
    let output = document.querySelector('.output');
    if (p1.hasOperatorSet) {

        if ((!containsDec(p1.getB)) && (input.innerHTML.length > 2)) {
            let inputText = document.createTextNode('.');
            input.appendChild(inputText);
            let b = input.innerHTML.substring(2, input.innerHTML.length)
            p1.setB(parseFloat(b));
        }


    } else {

        if (!containsDec(p1.getA)) {
            console.log("pressed")
            let outputText = document.createTextNode('.');
            output.appendChild(outputText);

            p1.setA(output.innerhtml);

        }
    }
}


function containsDec(string) {

    string = string.toString();

    for (let i = 0; i < string.length; i++) {
        if (i == '.') {
            return true;
        }

    }
    return false;

}


function equals() {
    let output = document.querySelector('.output');
    let input = document.querySelector('.input');
    if (typeof p1.getB !== 'undefined') {

        p1.calculate();

        p1.setA(p1.getResult);
        output.innerHTML = p1.getA;
        p1.setHasOperatorSet(false)
        p1.setB(0);
    }
}
