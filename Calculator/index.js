

const calc = document.getElementById("inputText");

let calculate = (number)=>{
    calc.value += number; 
}

let result =()=>{
    try{
        calc.value = eval(calc.value)
    }
    catch(err){
        alert('Enter the valid input')
    }
}

function clr(){
    calc.value = " ";
}

function del(){
    calc.value = calc.value.slice(0,-1); 
}
