const display = document.getElementById('display');

function add_display(input){
    display.value += input;

}
function clr_display(){
    display.value = " "
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Invalid";
    }

}  