const display = document.getElementById("display");
const resultBox = document.getElementById("result");

/* Add Value */

function appendValue(value){
    display.value += value;
    showRealTimeResult();
}

/* Clear Screen */

function clearDisplay(){
    display.value = "";
    resultBox.innerHTML = "Result: 0";
}

/* Delete Last Character */

function deleteLast(){
    display.value = display.value.slice(0,-1);
    showRealTimeResult();
}

/* Final Calculation */

function calculate(){

    try{

        if(display.value === ""){
            return;
        }

        let result = eval(display.value);

        display.value = result;
        resultBox.innerHTML = "Result: " + result;

    }
    catch(error){

        resultBox.innerHTML = "Invalid Expression";

    }
}

/* Real-Time Result */

function showRealTimeResult(){

    try{

        if(display.value === ""){

            resultBox.innerHTML = "Result: 0";
            return;
        }

        let result = eval(display.value);

        resultBox.innerHTML = "Result: " + result;

    }
    catch{

        resultBox.innerHTML = "Calculating...";
    }
}

/* Keyboard Support */

document.addEventListener("keydown", function(event){

    const key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ){

        display.value += key;
        showRealTimeResult();
    }

    else if(key === "Enter"){

        calculate();
    }

    else if(key === "Backspace"){

        deleteLast();
    }

    else if(key === "Escape"){

        clearDisplay();
    }

});