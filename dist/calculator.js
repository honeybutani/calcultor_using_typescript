"use strict";
let cal = false;
let memory;
let input = document.querySelector("#inputform");
let output = document.querySelector("#outputform");
/*
insert value and show in input form
value exist then append value
*/
function insert(num) {
    input.value = input.value + String(num);
}
/*
using eval evaluates or executes an argument like  +,-,/,*,**
and clear the output form.
*/
function calculate() {
    output.value = eval(input.value);
    cal = true;
    cleardata();
}
/*
clear whole data and on output form show 0
*/
function clean() {
    input.value = "";
    output.value = "0";
}
/*
clear only last elememt using slice where -1 indicate last element
*/
function back() {
    const deleteone = input.value;
    input.value = deleteone.slice(0, -1);
}
/*
trignometric functions check from dropdown and perform execution
*/
function gettrignometricOption() {
    let selectElement = document.querySelector("#trignometric");
    let selectedvalue = selectElement.options[selectElement.selectedIndex].value;
    if (selectedvalue == "sin") {
        input.value = String(Math.sin(Number(input.value)));
    }
    else if (selectedvalue == "cos") {
        input.value = String(Math.cos(Number(input.value)));
    }
    else if (selectedvalue == "tan") {
        input.value = String(Math.tan(Number(input.value)));
    }
}
/*
 functions check from dropdown and perform execution
*/
function getfunctionOption() {
    let selectElement = document.querySelector("#function");
    let selectedvalue = selectElement.options[selectElement.selectedIndex].value;
    if (selectedvalue == "random") {
        input.value = String(Math.random());
    }
    else if (selectedvalue == "ceil") {
        input.value = String(Math.ceil(Number(input.value)));
    }
    else if (selectedvalue == "floor") {
        input.value = String(Math.floor(Number(input.value)));
    }
}
function cleardata() {
    const selectElement = document.querySelectorAll(".numb");
    selectElement.forEach((el) => el.addEventListener("click", (event) => {
        if (cal == true) {
            let num = input.value;
            input.value = num.slice(-1);
            output.value = "0";
            cal = false;
        }
        else {
            return false;
        }
    }));
}
/*
on click 2nd button value change of button then check which function to execute.
execute x2 and x3
*/
function square() {
    let newname = document.getElementById("xsquare")
        .innerHTML;
    if (newname == "x²") {
        output.value = String(Math.pow(Number(input.value), 2));
    }
    else {
        output.value = String(Math.pow(Number(input.value), 3));
    }
}
/*
on click 2nd button value change of button then check which function to execute.
execute 10^x  and 2^x
*/
function baseten() {
    let newname = document.getElementById("tenx").innerHTML;
    if (newname == "10<sup>x</sup>") {
        output.value = String(Math.pow(10, Number(input.value)));
    }
    else {
        output.value = String(Math.pow(2, Number(input.value)));
    }
}
/*
on click 2nd button value change of button then check which function to execute.
execute √ and ∛
*/
function sqrt2() {
    let newname = document.getElementById("squareroot")
        .innerHTML;
    if (newname == "√") {
        output.value = String(Math.pow(Number(input.value), 1 / 2));
    }
    else {
        output.value = String(Math.pow(Number(input.value), 1 / 3));
    }
}
function dividenumber(num) {
    let text = input.value;
    input.value = text + "(" + num + ")";
    output.value = String(1 / Number(text));
}
/*
on click 2nd button value change of button then check which function to execute.
execute log base 10 and log base 2
*/
function logfunction(num) {
    let text = input.value;
    let newname = document.getElementById("logten").innerHTML;
    if (newname == "log") {
        input.value = text + "(" + num + ")";
        output.value = String(Math.log10(Number(text)));
    }
    else {
        input.value = `${text} (log2)`;
        output.value = String(Math.log2(Number(text)));
    }
}
/*
on click 2nd button value change of button then check which function to execute.
execute ln and e^x
*/
function lnfunction(num) {
    let text = input.value;
    let newname = document.getElementById("lnx").innerHTML;
    console.log(newname);
    if (newname == "ln") {
        input.value = num + "(" + text + ")";
        output.value = String(Math.log(Number(text)));
    }
    else {
        input.value = `${text} (e)`;
        output.value = String(Math.exp(Number(text)));
    }
}
function expfunction(num) {
    let text = input.value;
    input.value = num + "(" + text + ")";
    output.value = String(Math.exp(Number(text)));
}
function factorial(n) {
    let num = Number(input.value);
    let answer = 1;
    //base case
    if (num == 0 || num == 1) {
        answer = 1;
        //recursive case
    }
    else {
        for (let i = num; i >= 1; i--) {
            answer = answer * i;
        }
    }
    input.value = n + "!(" + num + ")";
    output.value = String(answer);
}
/*
check if negative then multiply -1 and get positive number and if postive show that
*/
function modes() {
    let num = Number(input.value);
    input.value = String(num);
    output.value = String(num < 0 ? num * -1 : num);
}
/*
degree to radian and radian to degree
*/
function degreefunction() {
    let elem = document.getElementById("degree");
    if (elem.innerHTML == "DEG") {
        let num = Number(output.value);
        var pi = Math.PI;
        output.value = String(num * (180 / pi));
        elem.innerHTML = "RAD";
    }
    else {
        let num = Number(output.value);
        var pi = Math.PI;
        input.value = output.value;
        output.value = String(num * (pi / 180));
        elem.innerHTML = "DEG";
    }
}
/*
on click 2nd function get all the element  byclassname and by switch case change value and again toggle by checking if condition
*/
function changefunction() {
    let elem = document.getElementById("functionchange");
    let btns = document.getElementsByClassName("changebuttonclass");
    if (elem.innerHTML == "2<sup>nd</sup>") {
        for (let item of btns) {
            let name = item.innerHTML;
            switch (name) {
                case "x²":
                    item.innerHTML = "x<sup>3</sup>";
                    break;
                case "√":
                    item.innerHTML = "∛";
                    break;
                case "10<sup>x</sup>":
                    item.innerHTML = "2<sup>x</sup>";
                    break;
                case "log":
                    item.innerHTML = "log<sub>2</sub>";
                    break;
                case "ln":
                    item.innerHTML = "e<sup>x</sup>";
                    break;
            }
        }
        elem.innerHTML = "1<sup>st</sup>";
    }
    else {
        for (let item of btns) {
            let name = item.innerHTML;
            switch (name) {
                case "x<sup>3</sup>":
                    item.innerHTML = "x²";
                    break;
                case "∛":
                    item.innerHTML = "√";
                    break;
                case "2<sup>x</sup>":
                    item.innerHTML = "10<sup>x</sup>";
                    break;
                case "log<sub>2</sub>":
                    item.innerHTML = "log";
                    break;
                case "e<sup>x</sup>":
                    item.innerHTML = "ln";
                    break;
            }
        }
        elem.innerHTML = "2<sup>nd</sup>";
    }
}
/*
if input value postive then multiply by -1 and get negative value and if negative multiply by -1 get positive value
*/
function checksign() {
    let num = Number(input.value);
    input.value = String(num);
    output.value = String(num * -1);
}
function farnaiatefunction() {
    let num = parseInt(input.value);
    input.value = `F-E(${num})`;
    output.value = num.toExponential();
}
/*
intially MC , MR is disable but on click on MS they got activated and store value in memory variable
*/
function memorysavefunction() {
    document.getElementById("memoryclear").disabled = false;
    document.getElementById("memoryread").disabled = false;
    memory = output.value;
}
/*
stored value - given value
*/
function memoryminusfunction() {
    let num = parseInt(input.value);
    input.value = `${parseInt(memory)} - ${num} `;
    memory = String(parseInt(memory) - num);
    output.value = memory;
}
/*
stored value + given value
*/
function memoryplusfunction() {
    let num = parseInt(input.value);
    input.value = `${parseInt(memory)} + ${num} `;
    memory = String(parseInt(memory) + num);
    output.value = memory;
}
/*
intially MC , MR is disable but on click on MS they got activated and store value in memory variable
*/
function memoryreadfunction() {
    output.value = memory;
}
/*
intially MC , MR is disable but on click on MS they got activated and store value in memory variable
*/
function memoryclearfunction() {
    let memory = " ";
    output.value = memory;
}
//# sourceMappingURL=calculator.js.map