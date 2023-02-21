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