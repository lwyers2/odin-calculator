
let inputA;
let inputB;
let conditionalSet = false;
enterButtons();






function enterButtons() {

    let divide = document.querySelector("#divide");
    divide.addEventListener("click", () => {
        enterButton("divide");
    });

    let multiply = document.querySelector("#multiply");
    multiply.addEventListener("click", () => {
        enterButton("multiply");
    });

    let subtract = document.querySelector("#subtract");
    subtract.addEventListener("click", () => {
        enterButton("subtract");
    });

    let add = document.querySelector("#add");
    add.addEventListener("click", () => {
        enterButton("add");
    });

    let seven = document.querySelector("#seven");
    seven.addEventListener("click", () => {
        enterButton("seven");
    });

    let eight = document.querySelector("#eight");
    eight.addEventListener("click", () => {
        enterButton("eight");
    });

    let nine = document.querySelector("#nine");
    nine.addEventListener("click", () => {
        enterButton("nine");
    });

    let c = document.querySelector("#c");
    c.addEventListener("click", () => {
        enterButton("Clear");
    });

    let four = document.querySelector("#four");
    four.addEventListener("click", () => {
        enterButton("four");
    });

    let five = document.querySelector("#five");
    five.addEventListener("click", () => {
        enterButton("five");
    });

    let six = document.querySelector("#six");
    six.addEventListener("click", () => {
        enterButton("six");
    });

    let ce = document.querySelector("#ce");
    ce.addEventListener("click", () => {
        enterButton("ce");
    });

    let one = document.querySelector("#one");
    one.addEventListener("click", () => {
        enterButton("one");
    });

    let two = document.querySelector("#two");
    two.addEventListener("click", () => {
        enterButton("two");
    });

    let three = document.querySelector("#three");
    three.addEventListener("click", () => {
        enterButton("three");
    });

    let del = document.querySelector("#delete");
    del.addEventListener("click", () => {
        enterButton("delete");
    });

    let zero = document.querySelector("#zero");
    zero.addEventListener("click", () => {
        enterButton("zero");
    });

    let decimal = document.querySelector("#decimal");
    decimal.addEventListener("click", () => {
        enterButton("decimal");
    });

    let equal = document.querySelector("#equal");
    equal.addEventListener("click", () => {
        enterButton("equal");
    });




}





let input = 5;

function enterButton(button) {

    switch (button) {
        case 'zero':
            inputNumber('0');
            console.log(button + "pressed")
            break;
        case 'one':
            inputNumber('1');
            console.log(button + "pressed")
            break;
        case 'two':
            inputNumber('2');
            console.log(button + "pressed")
            break;
        case 'three':
            inputNumber('3');
            console.log(button + "pressed")
            break;
        case 'four':
            inputNumber('4');
            console.log(button + "pressed")
            break;
        case 'five':
            inputNumber('5');
            console.log(button + "pressed")
            break;
        case 'six':
            inputNumber('6');
            console.log(button + "pressed")
            break;
        case 'seven':
            inputNumber('7');
            console.log(button + "pressed")
            break;
        case 'eight':
            inputNumber('8');
            console.log(button + "pressed")
            break;
        case 'nine':
            inputNumber('9');
            console.log(button + "pressed")
            break;
        case 'divide':
            inputConditional('/');
            console.log(button + " pressed");
            break;
        case 'multiply':
            inputConditional('*');
            console.log(button + " pressed");
            break;
        case 'add':
            inputConditional('+');
            console.log(button + " pressed");
            break;
        case 'subtract':
            inputConditional('-');
            console.log(button + " pressed");
            break;

    }


}

function inputNumber(number) {

    let input = document.querySelector('.input');




    if (input.innerHTML.length == 24 || input.innerHTML.length == 46) {
        let inputText = document.createTextNode(number);
        input.removeChild(input.lastChild);
        input.appendChild(inputText);
    } else {
        let inputText = document.createTextNode(number);
        input.appendChild(inputText);
    }


}

function inputConditional(conditional) {



    let input = document.querySelector('.input');

    if (hasOperator(input.innerHTML)) {
        let inputA = getInputA(input.innerHTML);
        let inputB = getInputB(input.innerHTML);
        let inputOperator = getOperation(getInputOperation(input.innerHTML));
        console.log('A: ' + inputA);
        console.log('Oper: ' + inputOperator);
        console.log('B: ' + inputB);
        console.log(calculate(inputA, inputB, inputOperator));
    } else {

        input.style.fontSize = 'large';
        let inputText = document.createTextNode(conditional);
        input.appendChild(inputText);
    }
}

function hasOperator(string) {



    for (let i = 0; i < string.length; i++) {

        let isNum = /^\d+$/.test(string.charAt(i));

        if (!isNum) {
            return true;
        }


    }

    return false;

}



function getOperation(operator) {

    let add = (a, b) => a + b;

    let subtract = (a, b) => a - b;

    let multiply = (a, b) => a * b;

    let divide = (a, b) => a / b;


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


function getInputOperation(string) {



    for (let i = 0; i < string.length; i++) {

        let isNum = /^\d+$/.test(string.charAt(i));

        if (!isNum) {
            return string.charAt(i);
        }


    }

    return false;

}




function getInputA(string) {

    let nums = '';

    for (let i = 0; i < string.length; i++) {

        let isNum = /^\d+$/.test(string.charAt(i));



        if (!isNum) {

            nums = parseInt(nums);

            return nums;
        }


        nums += string.charAt(i);





    }


}


function getInputB(string) {

    let nums;

    for (let i = 0; i < string.length; i++) {

        let isNum = /^\d+$/.test(string.charAt(i));



        if (!isNum) {

            nums = string.substring(i + 1, string.length);

            nums = parseInt(nums);
            return nums;
        }


    }

}

function calculate(a, b, operator) {





    // a = parseInt(document.querySelector('.input').innerHTML);

    return (operator(a, b));


}