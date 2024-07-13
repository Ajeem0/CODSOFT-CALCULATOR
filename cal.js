const btn = document.querySelectorAll("button");
const input = document.querySelector("input");
const special = ["%","*","/","+","=","-"];
let output = "";

//Calculate function to calculate on the basis of button clicked
const calculate = (btnValue) =>{
    input.focus();
    if (btnValue === "="&& output != "") {
         //If the button "%" Clicked then perform "/100"
        output = eval(output.replace("%","/100"));
    }
    else if (btnValue === "AC") {
        output = "";
    }
    else if (btnValue === "DEL") {
        //If "DEL" Clicked then delete last wrriten number
        output = output.toString().slice(0,- 1);
    }
    else{
        //If output is empty and special clicked then return
        if (output === "=" && special.includes(btnValue) ) {
            return;
        }
       output += btnValue; 
    }
    input.value = output;
};

//add event listner to button to Calculate()
btn.forEach((button)=>{
    //click listner call calculate() with dataset as the base Value
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
})