let Calculator = class Calculator {

    constructor() {
        this.setHasOperator = false;
    }

    //Setters
    setA(newA) {

        this.a = newA;
    }

    setB(newB) {
        this.b = newB;
    }

    setOperator(newOperator) {
        this.operator = newOperator;
    }


    setResult(result) {
        this.result = result;
    }

    setHasOperator(hasOperator) {
        this.hasOperator = hasOperator;
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

    get getHasOperator() {
        return this.hasOperator;
    }


    //converts a string into a method

    getOperation(operator) {

        let add = (a, b) => (a) + (b);

        let subtract = (a, b) => (a) - (b);

        let multiply = (a, b) => (a) * (b);

        let divide = (a, b) => (a) / (b);


        if (operator == '/') {

            return divide;
        } else if (operator == '*') {
            return multiply;
        } else if (operator == '-') {
            return subtract;
        } else if (operator == '+') {
            return add;
        }
    }

    //returns and sets the result of a calculation
    calculate() {

        let operation = getOperation(this.operator);

        let calculation = (operation(a, b));
        //update calculators's stored result
        setResult(calculation);
    }

}
enterButtons();
//create new instance of calculator

const p1 = new Calculator();





function enterButtons() {

    //event listeners for all buttons

    let divide = document.querySelector("#divide");
    divide.addEventListener("click", () => {
        inputConditional('/');
        console.log("pressed");
    });

    let multiply = document.querySelector("#multiply");
    multiply.addEventListener("click", () => {
        inputConditional('*');
    });

    let subtract = document.querySelector("#subtract");
    subtract.addEventListener("click", () => {
        inputConditional('-');
    });

    let add = document.querySelector("#add");
    add.addEventListener("click", () => {
        inputConditional('+');
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
        decimal();
    });

    let equal = document.querySelector("#equal");
    equal.addEventListener("click", () => {
        enterButton("equal");
    });



}


function inputNumber(number) {

    //create dom element for output box
    let output = document.querySelector('.output');
    let input = document.querySelector('.input');

    if (typeof p1.getA !== 'undefined') {
        output.innerHTML = p1.getA;
    } else {
        output.innerHTML = '';
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

    console.log(p1.getA);
}




function inputConditional(conditional) {

    //get output from dom
    let output = document.querySelector('.output');
    //get input from dom
    let input = document.querySelector('.input');
    //get output length from dom
    let outputLength = output.innerHTML.length;
    //get input length from dom
    let inputLength = input.innerHTML.length;





    //console.log(outputLength);

    if (outputLength == 1 && (output.innerHTML.charAt(0) == '-' || output.innerHTML.charAt(0) == '+') && (conditional == '-' || conditional == '+')) {

        let outputText = document.createTextNode(conditional);
        //remove the last number 
        output.removeChild(output.lastChild);
        //replace last number with new number
        output.appendChild(outputText);

        let inputText = document.createTextNode(conditional);
        //remove the last number 
        input.removeChild(input.lastChild);
        //replace last number with new number
        input.appendChild(inputText);

    }



    // can put negative or posiive number. Check if no number has been inputted yet, then check if conditional is positve or negative sign 
    if ((outputLength == 0) && (conditional == '-' || conditional == '+')) {


        let outputText = document.createTextNode(conditional);
        output.appendChild(outputText);

    } else if ((hasOperator(input.innerHTML)) && inputLength > 2) {
        input.replaceChildren();

        let inputText = document.createTextNode(output.innerHTML + ' ' + conditional + ' ');
        input.appendChild(inputText);



    } else if (outputLength == 0) {
        let outputText = document.createTextNode('');
        output.appendChild(outputText);
    } else {

        let inputText = document.createTextNode(output.innerHTML + ' ' + conditional + ' ');
        input.appendChild(inputText);

    }

}


// function getInputA(string) {

//     let nums = '';
//     let start = 0;




//     if (string.charAt(0) == '-') {
//         nums = '-';
//         start = 1;
//         console.log(nums);

//     }


//     for (let i = start; i < string.length; i++) {

//         let isNum = hasOperator(string.charAt(i));



//         console.log(start);
//         console.log(nums)
//         console.log(string.charAt(i));
//         if (isNum) {

//             nums = parseFloat(nums);

//             return nums;
//         }


//         nums += string.charAt(i);
//     }



// }


// function getInputB(string) {

//     let nums;
//     let start = 0;

//     if (string.charAt(0) == '-') {

//         start = 1;
//         console.log(nums)
//     }

//     for (let i = start; i < string.length; i++) {

//         let isNum = hasOperator(string.charAt(i));



//         if (isNum) {

//             nums = string.substring(i + 1, string.length);

//             nums = parseFloat(nums);
//             return nums;
//         }


//     }

// }

// function getInputOperation(string) {


//     let start = 0;

//     if (string.charAt(0) == '-') {

//         start = 1;

//     }

//     for (let i = start; i < string.length; i++) {

//         let isNum = hasOperator(string.charAt(i));

//         if (isNum) {
//             return string.charAt(i);
//         }


//     }

//     return false;

// }

// function hasOperator(string) {

//     let start = 0;

//     if (string.charAt(0) == '-') {
//         start = 1;
//     }




//     for (let i = start; i < string.length; i++) {

//         switch (string.charAt(i)) {
//             case '/':
//                 return true;
//                 break;
//             case '*':
//                 return true;
//                 break;
//             case '-':
//                 return true;
//                 break;
//             case '+':
//                 return true;
//                 break;
//         }

//     }

//     return false;

// }
