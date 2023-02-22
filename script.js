const buttons=document.querySelectorAll(".button");
const display=document.querySelector("#displayText");
function operator(num1,num2,oper){
    switch (oper){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}

function add(){
    let sum=arguments[0];
    for(let i=1; i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
function subtract(){
    let sum=arguments[0];
    for(let i=1; i<arguments.length;i++){
        sum=sum-arguments[i];
    }
    return sum;
}
function multiply(){
    let sum=1;
    for(let i=0; i<arguments.length;i++){
        sum=sum*arguments[i];
    }
    return sum;
}
function divide(){
    let sum=arguments[0];
    for(let i=1; i<arguments.length;i++){
        sum=sum/arguments[i];
    }
    return sum;
}
let ValueStackPos1=null;
let ValueStackPos2=null;
let permissionToClear=1;
let newValue=0;
let OperatorStackPos1="";
let lastOperationResult=0;
function updateValue(a){
    display.textContent=a;
}

function keyInput(){
    let pressed=this.textContent;
    // console.log(pressed);
    if (isNaN(pressed.toString())==true){
        switch (pressed){
            case "AC":
                ValueStackPos1=0;
                ValueStackPos2=null;
                permissionToClear=1;
                updateValue(ValueStackPos1);
                break;
            case "DEL":
                ValueStackPos1=(ValueStackPos1/10 ^ 0);
                updateValue(ValueStackPos1);
                break;
            case "+/-":
                ValueStackPos1=ValueStackPos1*-1;
                updateValue(ValueStackPos1);
                break;
            case "=":
                if (ValueStackPos1==null){updateValue("0");}
                else if (ValueStackPos2==null){updateValue(ValueStackPos1);}
                else{
                    ValueStackPos1= operator(parseInt(ValueStackPos2),parseInt(ValueStackPos1),OperatorStackPos1);
                    updateValue(ValueStackPos1);
                    ValueStackPos2=null;
                }
                permissionToClear=1;
                break;
            default:
                permissionToClear=1;
                OperatorStackPos1=pressed;
                if (ValueStackPos2==null){
                    ValueStackPos2=ValueStackPos1;
                }
                else{
                    ValueStackPos2= operator(parseInt(ValueStackPos2),parseInt(ValueStackPos1),OperatorStackPos1);
                    console.log(ValueStackPos2)
                }
                break;
        }
        console.log("      NaN",pressed.toString())
    }
    else{
        if(permissionToClear==1){
            ValueStackPos1=pressed;
            updateValue(ValueStackPos1);
            permissionToClear=0;
        }
        else{
            ValueStackPos1 == 0 ? newValue=pressed : newValue=ValueStackPos1+pressed;
            ValueStackPos1=newValue;
            updateValue(ValueStackPos1);
        }
    }
}

function initalize(){
    buttons.forEach(button => {
        button.addEventListener("click",keyInput);
    });
}
initalize()