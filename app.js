

enterButtons();






function enterButtons() {

    let divide = document.querySelector("#divide");
    divide.addEventListener("click", () => {
        console.log("Divide");
    });

    let multiply = document.querySelector("#multiply");
    multiply.addEventListener("click", () => {
        console.log("Multiply");
    });

    let subtract = document.querySelector("#subtract");
    subtract.addEventListener("click", () => {
        console.log("subtract");
    });

    let add = document.querySelector("#add");
    add.addEventListener("click", () => {
        console.log("add");
    });

    let seven = document.querySelector("#seven");
    seven.addEventListener("click", () => {
        console.log("7");
    });

    let eight = document.querySelector("#eight");
    eight.addEventListener("click", () => {
        console.log("eight");
    });

    let nine = document.querySelector("#nine");
    nine.addEventListener("click", () => {
        console.log("nine");
    });

    let c = document.querySelector("#c");
    c.addEventListener("click", () => {
        console.log("Clear");
    });

    let four = document.querySelector("#four");
    four.addEventListener("click", () => {
        console.log("four");
    });

    let five = document.querySelector("#five");
    five.addEventListener("click", () => {
        console.log("five");
    });

    let six = document.querySelector("#six");
    six.addEventListener("click", () => {
        console.log("six");
    });

    let ce = document.querySelector("#ce");
    ce.addEventListener("click", () => {
        console.log("ce");
    });

    let one = document.querySelector("#one");
    one.addEventListener("click", () => {
        console.log("one");
    });

    let two = document.querySelector("#two");
    two.addEventListener("click", () => {
        console.log("two");
    });

    let three = document.querySelector("#three");
    three.addEventListener("click", () => {
        console.log("three");
    });

    let del = document.querySelector("#delete");
    del.addEventListener("click", () => {
        console.log("delete");
    });

    let zero = document.querySelector("#zero");
    zero.addEventListener("click", () => {
        console.log("zero");
    });

    let decimal = document.querySelector("#decimal");
    decimal.addEventListener("click", () => {
        console.log("decimal");
    });

    let equal = document.querySelector("#equal");
    equal.addEventListener("click", () => {
        console.log("equal");
    });




}





let input = 5;

function enterButton(button) {

    switch (button) {
        case '1':
            inputNumber('1');
            break;
    }


}





let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;





function calculator(a, b, operator) {





    a = parseInt(document.querySelector('.input').innerHTML);

    return (operator(a, b));


}