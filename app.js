
let inputA;
let inputB;
let conditionalSet = false;
enterButtons();






function enterButtons() {

    let divide = document.querySelector("#divide");
    divide.addEventListener("click", () => {
        enterButton("divide");
    });

    divide.addEventListener('keydown', () => {
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
        enterButton("c");
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







function enterButton(button) {

    let input = document.querySelector('.input');
    let inputLength = input.innerHTML.length;

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

        case 'equal':
            inputEqual();
            console.log(button + ' pressed');
            break;


        case 'c':
            deleteLast();
            console.log(button + ' pressed');
            break;

        case 'ce':
            reset();
            console.log(button + ' pressed');
            break;


    }


}

function inputNumber(number) {

    //create dom element for output box
    let output = document.querySelector('.output');
    let input = document.querySelector('.input');

    if (input.innerHTML.length > 1) {


        let inputText = document.createTextNode(number);
        input.appendChild(inputText);



        let operator = getOperation(input.innerHTML.charAt(0));
        let a = parseFloat(output.innerHTML);
        let b = parseFloat(input.innerHTML.substring(1, input.innerHTML.length));
        let potNum = calculate(a, b, operator);

        output.replaceChildren();

        //create text node with number
        let outputText = document.createTextNode(potNum);

        //add new number
        output.appendChild(outputText);


    } else if (output.innerHTML.length == 24) {




        //changes size to large for space
        output.style.fontSize = 'large';

        //create text node with number
        let outputText = document.createTextNode(number);

        //add new number
        output.appendChild(outputText);




    } else if (output.innerHTML.length == 46) {
        let outputText = document.createTextNode(number);
        //remove the last number 
        output.removeChild(output.lastChild);
        //replace last number with new number
        output.appendChild(outputText);
    } else {
        //add number to output box
        let outputText = document.createTextNode(number);
        output.appendChild(outputText);
    }


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

    // can put negative or posiive number. Check if no number has been inputted yet, then check if conditional is positve or negative sign 
    if ((outputLength == 0) && (conditional == '-' || conditional == '+')) {


        let outputText = document.createTextNode(conditional + ' ');
        output.appendChild(outputText);

    } else if ((hasOperator(input.innerHTML)) && inputLength == 2) {

        let inputText = document.createTextNode(conditional + ' ');
        //remove the last number 
        input.removeChild(input.lastChild);
        //replace last number with new number
        input.appendChild(inputText);
    } else if ((hasOperator(input.innerHTML)) && inputLength > 2) {




        input.replaceChildren();

        let inputText = document.createTextNode(conditional + ' ');
        input.appendChild(inputText);



    } else if (outputLength == 0) {
        let outputText = document.createTextNode('');
        output.appendChild(outputText);
    } else {

        let inputText = document.createTextNode(conditional + ' ');
        input.appendChild(inputText);

    }

}


function inputEqual() {

    let input = document.querySelector('.input');
    let inputText = document.querySelector('.input').innerHTML;
    let output = document.querySelector('.output');

    let a = getInputA(inputText);
    let b;
    let c;

    if (getInputOperation(inputText).length == 1) {

        console.log('true')
        b = getInputB(inputText);
        c = getInputOperation(inputText);
        c = getOperation(c);

        input.innerHTML = calculate(a, b, c);
        output.innerHTML = calculate(a, b, c);


    }


}

function makeNegative() {
    let input = document.querySelector('.input');
    let inputText = document.createTextNode('-');
    input.appendChild(inputText);
}

function hasOperator(string) {

    let start = 0;




    for (let i = start; i < string.length; i++) {

        switch (string.charAt(i)) {
            case '/':
                return true;
                break;
            case '*':
                return true;
                break;
            case '-':
                return true;
                break;
            case '+':
                return true;
                break;
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


    let start = 0;

    if (string.charAt(0) == '-') {

        start = 1;

    }

    for (let i = start; i < string.length; i++) {

        let isNum = /^\d+$/.test(string.charAt(i));

        if (!isNum) {
            return string.charAt(i);
        }


    }

    return false;

}




function getInputA(string) {

    let nums = '';
    let start = 0;

    if (string.charAt(0) == '-') {
        nums = '-';
        start = 1;
        console.log(nums)
    }


    for (let i = start; i < string.length; i++) {

        let isNum = hasOperator(string.charAt(i));



        console.log(start);
        console.log(nums)
        console.log(string.charAt(i));
        if (isNum) {

            nums = parseFloat(nums);

            return nums;
        }


        nums += string.charAt(i);





    }



}


function getInputB(string) {

    let nums;
    let start = 0;

    if (string.charAt(0) == '-') {

        start = 1;
        console.log(nums)
    }

    for (let i = start; i < string.length; i++) {

        let isNum = hasOperator(string.charAt(i));



        if (isNum) {

            nums = string.substring(i + 1, string.length);

            nums = parseFloat(nums);
            return nums;
        }


    }

}

function calculate(a, b, operator) {





    // a = parseInt(document.querySelector('.input').innerHTML);

    return (operator(a, b));


}

function updateCalculation(number, operator) {
    let input = document.querySelector('.input');
    let output = document.querySelector('.output');

    input.innerHTML = number + operator;

    output.innerHTML = number;

}

function deleteLast() {
    let input = document.querySelector('.input');
    input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);

}

function reset() {
    let input = document.querySelector('.input');
    let output = document.querySelector('.output');
    input.innerHTML = '';
    output.innerHTML = '';
}