const btn = document.querySelectorAll("button");
const input = document.querySelector("input");
const special = ["%","*","/","+","=","-"];
let output = "";


const calculate = (btnValue) =>{
    input.focus();
    if (btnValue === "="&& output != "") {
        output = eval(output.replace("%","/100"));
    }
    else if (btnValue === "AC") {
        output = "";
    }
    else if (btnValue === "DEL") {
        output = output.toString().slice(0,- 1);
    }
    else{
        if (output === "=" && special.includes(btnValue) ) {
            return;
        }
       output += btnValue; 
    }
    input.value = output;
};

btn.forEach((button)=>{
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
})