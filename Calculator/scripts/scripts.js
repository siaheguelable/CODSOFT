const display=document.querySelector('#display');


function appendToDisplay(input) {
    display.value += input;

  
}   
  
function clearDisplay(){
    display.value = "";
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {               
        display.value = eval(display.value);
    }   catch (error) {
        display.value = "Error";
    }
    finally {
        setTimeout(() => {
            display.value = 0;
        }, 2000);
    }   
}

